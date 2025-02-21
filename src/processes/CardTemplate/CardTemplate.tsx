import cc from 'classcat';

import { Logo } from '@/processes';
import { CardColorWrapper, ExternalLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { Card, Tariff } from '@/shared/models';

import { CardLinks } from './CardLinks';
import { EditableCardDescription } from './EditableCardDescription';
import messages from './messages';

import styles from './cardTemplate.module.css';

interface Props {
	card: Card;
	cacheDataKey?: string;
	hideFooter?: boolean;
	tariffData?: Tariff;
	isFullScreen?: boolean;
}

export const CardTemplate = ({
	card,
	hideFooter,
	tariffData,
	isFullScreen,
	cacheDataKey,
}: Props) => {
	const { language } = useLanguage();
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
				{cacheDataKey ? (
					<EditableCardDescription
						cardId={card.id}
						description={card.description}
						cacheDataKey={cacheDataKey}
						isEnabledByTariff={tariffData?.hasCardDescription}
					/>
				) : (
					card.description && (
						<div className={styles.card__description}>{card.description}</div>
					)
				)}
				<CardLinks
					cardId={card.id}
					links={card.links}
					cacheDataKey={cacheDataKey}
					tariffData={tariffData}
				/>
			</div>
			{!hideFooter && (
				<div className={cc([styles.card__footer, styles.footer])}>
					<div className={styles.footer__logo}>
						<Logo accentTextClass={styles.logoAccentText} />
					</div>
					<div>
						{messages[language].footerText}{' '}
						<ExternalLink
							className={styles.footer__link}
							href={`mailto:${import.meta.env.VITE_FEEDBACK_EMAIL}`}
							rel="noopener noreferrer"
							target="_blank"
							text={import.meta.env.VITE_FEEDBACK_EMAIL}
						/>
					</div>
				</div>
			)}
		</CardColorWrapper>
	);
};
