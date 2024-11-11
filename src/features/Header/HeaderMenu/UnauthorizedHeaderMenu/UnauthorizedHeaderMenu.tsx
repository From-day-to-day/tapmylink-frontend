import { useLocation } from 'wouter-preact';
import messages from './messages';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

export const UnauthorizedHeaderMenu = () => {
  const { language } = useLanguage();
  const [location] = useLocation();

  return (
    <li>
      <a href={routes.auth(location)}>{messages[language].loginMenuItem}</a>
    </li>
  );
};
