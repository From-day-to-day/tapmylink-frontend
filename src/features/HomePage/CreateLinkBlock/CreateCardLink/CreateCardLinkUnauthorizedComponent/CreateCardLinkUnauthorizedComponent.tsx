import { CreateCardLink } from '../CreateCardLink';
import messages from './messages';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

export const CreateCardLinkUnauthorizedComponent = () => {
  const { language } = useLanguage();

  return (
    <CreateCardLink
      href={routes.auth(routes.createCard(language))}
      title={messages[language].createCardLinkText}
    />
  );
};
