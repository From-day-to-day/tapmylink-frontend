import { useLanguage } from '@/shared/hooks';
import { AuthWrapper } from '@/shared/processes';

import { CreateCardLinkAuthorizedComponent } from './CreateCardLinkAuthorizedComponent';
import { CreateCardLinkUnauthorizedComponent } from './CreateCardLinkUnauthorizedComponent';
import messages from './messages';

import styles from './createLinkBlock.module.css';

export const CreateLinkBlock = () => {
	const { language } = useLanguage();

	return (
		<div className={styles.summary}>
			<h2 className={styles.summary__title}>
				{messages[language].summaryTitle}
			</h2>
			<span>
				<AuthWrapper
					AuthorizedComponent={CreateCardLinkAuthorizedComponent}
					UnauthorizedComponent={CreateCardLinkUnauthorizedComponent}
				/>
			</span>
		</div>
	);
};
