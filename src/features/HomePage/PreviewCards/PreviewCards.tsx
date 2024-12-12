import { getSampleCards } from './_samples';
import styles from './previewCards.module.css';
import { useLanguage } from '@/shared/hooks';
import { CardTemplate } from '@/shared/processes';

export const PreviewCards = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.cards}>
      {getSampleCards(language).map((card) => (
        <div className={styles.card} key={card.id}>
          <CardTemplate card={card} hideFooter />
        </div>
      ))}
    </div>
  );
};
