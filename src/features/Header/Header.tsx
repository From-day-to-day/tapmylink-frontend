import styles from './header.module.css';
import { HeaderLanguageSwitcher } from './HeaderLanguageSwitcher';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__intro}>
        <HeaderLogo />
        <HeaderLanguageSwitcher />
      </div>
      <div>
        <HeaderMenu />
      </div>
    </div>
  );
};
