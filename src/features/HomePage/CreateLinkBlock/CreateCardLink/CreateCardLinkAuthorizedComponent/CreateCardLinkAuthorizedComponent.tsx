import { CreateCardLink } from '../CreateCardLink';
import messages from './messages';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

export const CreateCardLinkAuthorizedComponent = () => {
  const { language } = useLanguage();

  return (
    <CreateCardLink
      href={routes.createCard(language)}
      title={messages[language].createCardLinkText}
    />
  );
};
