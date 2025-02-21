import { Logo } from '@/processes/Logo';

import { HeaderLanguageSwitcher } from './HeaderLanguageSwitcher';
import { HeaderMenu } from './HeaderMenu';

import styles from './header.module.css';

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__intro}>
				<Logo />
				<HeaderLanguageSwitcher />
			</div>
			<div>
				<HeaderMenu />
			</div>
		</div>
	);
};
