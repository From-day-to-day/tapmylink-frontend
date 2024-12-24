import cc from 'classcat';
import { FaArrowRight } from 'react-icons/fa6';

import { ExternalLink } from '@/shared/components';
import { ETariff } from '@/shared/enums';
import { useLanguage } from '@/shared/hooks';
import { Tariff } from '@/shared/models';

import messages from './messages';

import styles from './tariffInfo.module.css';

interface Props {
	tariff: Tariff;
	currentUserTariffId: ETariff;
	onSwitchTariff: (tariffId: ETariff) => Promise<void>;
}

export const TariffInfo = ({
	tariff,
	currentUserTariffId,
	onSwitchTariff,
}: Props) => {
	const { language } = useLanguage();

	const isPremium = tariff.id === ETariff.Premium;

	return (
		<div className={cc([styles.tariff, isPremium && styles.tariff_accent])}>
			<h3 className={styles.tariff__title}>
				{isPremium && '💎 '}
				{messages[language][tariff.id].title}
			</h3>
			<div>{messages[language][tariff.id].description}</div>
			<ul className={styles.tariff__privileges}>
				{messages[language][tariff.id]
					.privileges(tariff.cardsLimit, tariff.linksLimit)
					.map((privilege, index) => (
						<li key={index}>{privilege}</li>
					))}
			</ul>
			<div className={styles.tariff__footer}>
				{tariff.id === currentUserTariffId && (
					<div className={styles.tariff__currentTariffLabel}>
						✅ {messages[language].currentTariffLabel}
					</div>
				)}
				{tariff.id > currentUserTariffId && (
					<span>
						<ExternalLink
							href="javascript:void(0)"
							onClick={() => onSwitchTariff(tariff.id)}
							text={messages[language].switchTariffButton(tariff.price)}
							PostIcon={FaArrowRight}
							className={styles.tariff__actionLink}
						/>
					</span>
				)}
			</div>
		</div>
	);
};
