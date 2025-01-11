import { AuthWrapper } from '@/processes';

import { AuthorizedHeaderMenu } from './AuthorizedHeaderMenu';
import { UnauthorizedHeaderMenu } from './UnauthorizedHeaderMenu';

import styles from './headerMenu.module.css';

export const HeaderMenu = () => {
	return (
		<>
			<menu className={styles.menu}>
				<AuthWrapper
					AuthorizedComponent={AuthorizedHeaderMenu}
					UnauthorizedComponent={UnauthorizedHeaderMenu}
				/>
			</menu>
		</>
	);
};
