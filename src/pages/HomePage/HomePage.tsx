import { AppBenefits } from './AppBenefits';
import { ManageCardsLinkBlock } from './ManageCardsLinkBlock';
import { PreviewCards } from './PreviewCards';

import styles from './homePage.module.css';

export const HomePage = () => {
	return (
		<div className={styles.container}>
			<div>
				<PreviewCards />
			</div>
			<div>
				<AppBenefits />
			</div>
			<div>
				<ManageCardsLinkBlock />
			</div>
		</div>
	);
};
