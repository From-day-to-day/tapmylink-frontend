import cc from 'classcat';
import { FaPencil, FaEye } from 'react-icons/fa6';

import {
	CardColorWrapper,
	ExternalLink,
	InternalLink,
} from '@/shared/components';
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
		<CardColorWrapper
			className={cc([styles.card, !theme && styles.card_withoutTheme])}
			theme={theme}
		>
			<div className={styles.cardHeader}>
				<span className={styles.cardHeader__title}>{name}</span>
				<RemoveCardButton cardId={id} cardName={name} />
			</div>
			<div>
				<CopyCardBlock cardName={name} />
			</div>
			<div className={styles.controls}>
				<ExternalLink
					className={styles.link}
					href={routes.publicCard(name)}
					PreIcon={FaEye}
					target="_blank"
					text={messages[language].viewCardButtonText}
				/>
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
