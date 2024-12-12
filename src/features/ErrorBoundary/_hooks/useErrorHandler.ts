import { Dispatch, StateUpdater, useEffect } from 'preact/hooks';
import { Log } from '../_models';
import messages from '../messages';
import { useLanguage } from '@/shared/hooks';
import { ErrorResponse } from '@/shared/models';
import { fetcher } from '@/shared/utils';

export const useErrorHandler = (
  setErrors: Dispatch<StateUpdater<string[]>>,
) => {
  const { language } = useLanguage();

  useEffect(() => {
    const registerError = (errorMessage: string) => {
      setErrors((prevState) =>
        prevState.includes(errorMessage)
          ? prevState
          : [...prevState, errorMessage],
      );
    };

    const sendLog = (errorMessage: string) => {
      fetcher<Log>('log', 'POST', new Log(errorMessage)).catch(() => {
        // Предостережение циклической зависимости
      });
    };

    const onError = ({ message }: ErrorEvent) => {
      registerError(messages[language].unknownError());
      sendLog(message);
    };

    const onUnhandledRejection = (e: PromiseRejectionEvent) => {
      if (e.reason instanceof ErrorResponse) {
        if (e.reason.httpStatus === 401) return;

        const currentLanguageMessages = messages[language];
        const errorMessage = e.reason.message;

        if (errorMessage in currentLanguageMessages) {
          registerError(
            currentLanguageMessages[
              errorMessage as keyof typeof currentLanguageMessages
            ](),
          );
        } else {
          registerError(e.reason.message);
          sendLog(errorMessage);
        }
      } else {
        const errorReason = String(e.reason);

        sendLog(errorReason);
        registerError(messages[language].unknownError());
      }
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, [language]);
};
