import styles from './footer.module.css';
import messages from './messages';
import { FeedbackLink } from '@/shared/components/FeedbackLink';
import { useLanguage } from '@/shared/hooks/useLanguage';

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
