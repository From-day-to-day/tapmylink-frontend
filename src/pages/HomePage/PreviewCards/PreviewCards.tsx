import { CardTemplate } from '@/processes';
import { useLanguage } from '@/shared/hooks';

import { getSampleCards } from './_samples';

import styles from './previewCards.module.css';

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
