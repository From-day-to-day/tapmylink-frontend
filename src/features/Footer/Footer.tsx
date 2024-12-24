import { ExternalLink } from '@/shared/components';
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
			<ExternalLink
				className={styles.feedbackLink}
				href={`mailto:${import.meta.env.VITE_FEEDBACK_EMAIL}`}
				rel="noopener noreferrer"
				target="_blank"
				text={messages[language].feedbackLink}
			/>
		</div>
	);
};
