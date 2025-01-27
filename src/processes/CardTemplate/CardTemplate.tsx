import { CardColorWrapper } from '@/shared/components';
import { Card } from '@/shared/models';

import { CardLink, EditableCardLink } from './CardLink';
import { EditableCardDescription } from './EditableCardDescription';

import styles from './cardTemplate.module.css';

interface Props {
	card: Card;
	cacheDataKey?: string;
	isEditable?: boolean;
	hideFooter?: boolean;
	hideDescription?: boolean;
	isFullScreen?: boolean;
}

export const CardTemplate = ({
	card,
	isEditable,
	hideFooter,
	hideDescription,
	isFullScreen,
	cacheDataKey,
}: Props) => {
	return (
		<CardColorWrapper
			className={styles.card}
			theme={card.theme}
			isFullScreen={isFullScreen}
		>
			<div className={styles.card__body}>
				<div>
					<h2 className={styles.card__name}>{card.name}</h2>
				</div>
				{isEditable && !hideDescription && cacheDataKey ? (
					<EditableCardDescription
						id={card.id}
						description={card.description}
						cacheDataKey={cacheDataKey}
					/>
				) : (
					card.description && (
						<div className={styles.card__description}>{card.description}</div>
					)
				)}
				{card.links && (
					<div className={styles.card__links}>
						{card.links.map((link) => (
							<>
								{isEditable ? (
									<EditableCardLink title={link.title} url={link.url} />
								) : (
									<CardLink title={link.title} url={link.url} />
								)}
								{` `}
							</>
						))}
					</div>
				)}
			</div>
			{!hideFooter && <div className={styles.card__footer}>logo</div>}
		</CardColorWrapper>
	);
};
