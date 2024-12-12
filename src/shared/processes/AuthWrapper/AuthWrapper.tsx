import { FC, memo } from 'preact/compat';
import useSWR from 'swr';
import { AuthorizedComponentProps } from './_models';
import messages from './messages';
import { Error, Loader } from '@/shared/components';
import { ACCOUNT_API_PATH, DAY_IN_MS } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { ErrorResponse, Tariff, User } from '@/shared/models';
import { rethrowErrorAsync } from '@/shared/utils';

export interface AuthWrapperProps {
  AuthorizedComponent: FC<AuthorizedComponentProps>;
  UnauthorizedComponent?: FC;
  needTariffData?: boolean;
}

export const AuthWrapper = memo(
  ({
    AuthorizedComponent,
    UnauthorizedComponent,
    needTariffData,
  }: AuthWrapperProps) => {
    const { language } = useLanguage();

    const {
      data: userData,
      error: userError,
      isLoading: isUserLoading,
      mutate: userMutate,
    } = useSWR<User, ErrorResponse>(ACCOUNT_API_PATH, {
      // 1 день не делать запросы повторно. revalidateIfStale был бы лучше, но он триггерит лишние перерендеры
      dedupingInterval: DAY_IN_MS,
    });

    const {
      data: tariffData,
      error: tariffError,
      isLoading: isTariffLoading,
    } = useSWR<Tariff, ErrorResponse>(
      userData && needTariffData ? 'tariffs/current' : null,
      {
        dedupingInterval: DAY_IN_MS,
      },
    );

    if (isUserLoading || isTariffLoading) {
      return <Loader />;
    }

    if (tariffError) {
      rethrowErrorAsync(tariffError);
    }

    if (userError || tariffError) {
      return UnauthorizedComponent ? (
        <UnauthorizedComponent />
      ) : (
        <Error message={messages[language].unauthorizedErrorMessage} />
      );
    }

    if (userData && (needTariffData ? tariffData : true)) {
      return (
        <AuthorizedComponent
          userData={userData}
          userMutate={userMutate}
          tariffData={tariffData}
        />
      );
    }

    return null;
  },
);
