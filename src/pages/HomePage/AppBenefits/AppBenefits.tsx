import { useLanguage } from '@/shared/hooks';

import { AppBenefit } from './AppBenefit';
import messages from './messages';

import styles from './appBenefits.module.css';

export const AppBenefits = () => {
	const { language } = useLanguage();

	return (
		<div className={styles.benefits}>
			<AppBenefit
				icon="🌐"
				title={messages[language].singleLinkTitle}
				text={messages[language].singleLinkText}
			/>
			<AppBenefit
				icon="⚡"
				title={messages[language].fastSetupTitle}
				text={messages[language].fastSetupText}
			/>
			<AppBenefit
				icon="🎨"
				title={messages[language].personalizedTitle}
				text={messages[language].personalizedText}
			/>
			<AppBenefit
				icon="🔗"
				title={messages[language].allLinksTitle}
				text={messages[language].allLinksText}
			/>
			<AppBenefit
				icon="📈"
				title={messages[language].audienceEaseTitle}
				text={messages[language].audienceEaseText}
			/>
			<AppBenefit
				icon="🔒"
				title={messages[language].controlTitle}
				text={messages[language].controlText}
			/>
		</div>
	);
};
