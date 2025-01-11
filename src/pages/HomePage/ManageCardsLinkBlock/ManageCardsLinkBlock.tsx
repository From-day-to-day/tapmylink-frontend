import { AuthWrapper } from '@/processes';
import { useLanguage } from '@/shared/hooks';

import { ManageCardsLinkAuthorizedComponent } from './ManageCardsLinkAuthorizedComponent';
import { ManageCardsLinkUnauthorizedComponent } from './ManageCardsLinkUnauthorizedComponent';
import messages from './messages';

import styles from './manageCardsLinkBlock.module.css';

export const ManageCardsLinkBlock = () => {
	const { language } = useLanguage();

	return (
		<div className={styles.summary}>
			<h2 className={styles.summary__title}>
				{messages[language].summaryTitle}
			</h2>
			<span>
				<AuthWrapper
					AuthorizedComponent={ManageCardsLinkAuthorizedComponent}
					UnauthorizedComponent={ManageCardsLinkUnauthorizedComponent}
				/>
			</span>
		</div>
	);
};
