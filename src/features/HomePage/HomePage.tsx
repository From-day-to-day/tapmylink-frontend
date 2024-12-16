import { AppBenefits } from './AppBenefits';
import { CreateLinkBlock } from './CreateLinkBlock';
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
				<CreateLinkBlock />
			</div>
		</div>
	);
};
