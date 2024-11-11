import { KeyedMutator } from 'swr';
import { Link } from 'wouter-preact';
import styles from './autorizedHeaderMenu.module.css';
import messages from './messages';
import { useLanguage } from '@/shared/hooks';
import { User } from '@/shared/models';
import { routes } from '@/shared/routes';
import { fetcher } from '@/shared/utils';

interface Props {
  authorizedData: User;
  authorizedMutate: KeyedMutator<User>;
}

export const AuthorizedHeaderMenu = ({ authorizedMutate }: Props) => {
  const { language } = useLanguage();

  const onLogout = () => {
    fetcher('logout', 'GET', undefined, `${import.meta.env.VITE_BACKEND_URL}/`).then(authorizedMutate);
  };

  const getActiveMenuLinkClassName = (isActive: boolean) => (isActive ? styles.activeLink : '');

  return (
    <>
      <li>
        <Link className={getActiveMenuLinkClassName} to={routes.contactCards(language)}>
          {messages[language].myContactCardsMenuItem}
        </Link>
      </li>
      <li>
        <Link className={getActiveMenuLinkClassName} to={routes.tariffs(language)}>
          {messages[language].plansMenuItem}
        </Link>
      </li>
      <li>
        <a href="javascript:void(0)" onClick={onLogout} className={styles.logoutLink}>
          {messages[language].logoutMenuItem}
        </a>
      </li>
    </>
  );
};
