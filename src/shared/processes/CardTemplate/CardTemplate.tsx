import cc from 'classcat';
import { CardDescription, EditableCardDescription } from './CardDescription';
import { CardLink, EditableCardLink } from './CardLink';
import styles from './cardTemplate.module.css';
import { CardTitle, EditableCardTitle } from './CardTitle';
import { ECardBackground } from '@/shared/enums';
import { Card } from '@/shared/models';

interface Props {
  card: Card;
  isEditable?: boolean;
  hideFooter?: boolean;
}

export const CardTemplate = ({ card, isEditable, hideFooter }: Props) => {
  return (
    <div
      className={cc([
        styles.card,
        styles[`card_${ECardBackground[card.background]}`],
      ])}
    >
      <div className={styles.card__body}>
        <div>
          {isEditable ? (
            <EditableCardTitle title={card.title} />
          ) : (
            <CardTitle title={card.title} />
          )}
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
    </div>
  );
};
