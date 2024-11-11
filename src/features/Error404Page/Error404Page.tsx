import messages from './messages';
import { Error } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';

export const Error404Page = () => {
  const { language } = useLanguage();

  return <Error message={messages[language].notFoundErrorText} />;
};
