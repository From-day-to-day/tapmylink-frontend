import styles from './feedbackLink.module.css';

interface Props {
  linkText: string;
}

export const FeedbackLink = ({ linkText }: Props) => {
  return (
    <a
      className={styles.link}
      href={`mailto:${import.meta.env.VITE_FEEDBACK_EMAIL}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkText}
    </a>
  );
};
