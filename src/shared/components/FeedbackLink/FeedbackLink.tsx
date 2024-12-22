import { ExternalLink } from '../CustomLink';

import styles from './feedbackLink.module.css';

interface Props {
	linkText: string;
}

export const FeedbackLink = ({ linkText }: Props) => {
	return (
		<ExternalLink
			className={styles.link}
			href={`mailto:${import.meta.env.VITE_FEEDBACK_EMAIL}`}
			rel="noopener noreferrer"
			target="_blank"
			text={linkText}
		/>
	);
};
