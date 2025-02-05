import { FaPencil } from 'react-icons/fa6';

import { ViewCardLink } from '@/processes';
import { CardColorWrapper, InternalLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { Card } from '@/shared/models';
import { routes } from '@/shared/routes';

import { CopyCardBlock } from './CopyCardBlock';
import messages from './messages';
import { RemoveCardButton } from './RemoveCardButton';

import styles from './cardItem.module.css';

interface Props {
	card: Card;
}

export const CardItem = ({ card: { id, name, theme } }: Props) => {
	const { language } = useLanguage();

	return (
		<CardColorWrapper className={styles.card} theme={theme}>
			<div className={styles.cardHeader}>
				<span className={styles.cardHeader__title}>{name}</span>
				<RemoveCardButton cardId={id} cardName={name} />
			</div>
			<div>
				<CopyCardBlock cardName={name} />
			</div>
			<div className={styles.controls}>
				<ViewCardLink linkClassName={styles.link} cardName={name} />
				<InternalLink
					className={styles.link}
					href={routes.editCard(id, language)}
					text={messages[language].editCardButtonText}
					PreIcon={FaPencil}
				/>
			</div>
		</CardColorWrapper>
	);
};
