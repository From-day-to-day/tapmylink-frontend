import { AuthorizedHeaderMenu } from './AuthorizedHeaderMenu';
import styles from './headerMenu.module.css';
import { UnauthorizedHeaderMenu } from './UnauthorizedHeaderMenu';
import { AuthWrapper } from '@/shared/processes';

export const HeaderMenu = () => {
  return (
    <>
      <menu className={styles.menu}>
        <AuthWrapper AuthorizedComponent={AuthorizedHeaderMenu} UnauthorizedComponent={UnauthorizedHeaderMenu} />
      </menu>
    </>
  );
};
