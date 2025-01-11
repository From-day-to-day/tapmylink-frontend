import { CardColorWrapper } from '@/shared/components';
import { Card } from '@/shared/models';

import { CardDescription, EditableCardDescription } from './CardDescription';
import { CardLink, EditableCardLink } from './CardLink';

import styles from './cardTemplate.module.css';

interface Props {
	card: Card;
	isEditable?: boolean;
	hideFooter?: boolean;
}

export const CardTemplate = ({ card, isEditable, hideFooter }: Props) => {
	return (
		<CardColorWrapper className={styles.card} theme={card.theme}>
			<div className={styles.card__body}>
				<div>
					<h2 className={styles.card__name}>{card.name}</h2>
				</div>
				<div>
					{isEditable ? (
						<EditableCardDescription description={card.description} />
					) : (
						<CardDescription description={card.description} />
					)}
				</div>
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
