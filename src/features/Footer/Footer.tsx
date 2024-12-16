import { FeedbackLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';

import messages from './messages';

import styles from './footer.module.css';

export const Footer = () => {
	const { language } = useLanguage();

	return (
		<div className={styles.footer}>
			<span>
				© {new Date().getFullYear()} TapMyLink. {messages[language].copyright}.
			</span>
			<FeedbackLink linkText={messages[language].feedbackLink} />
		</div>
	);
};
