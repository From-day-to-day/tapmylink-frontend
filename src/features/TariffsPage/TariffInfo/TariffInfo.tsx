import cc from 'classcat';

import { FeedbackLink } from '@/shared/components';
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
					.privileges(String(tariff.linksLimit))
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
					<>
						<span>
							<a
								href="javascript:void(0)"
								onClick={() => onSwitchTariff(tariff.id)}
							>
								{messages[language].switchTariffButton(String(tariff.price))}
							</a>
						</span>
						<span>
							<FeedbackLink
								linkText={messages[language].switchTariffHelpLink}
							/>
						</span>
					</>
				)}
			</div>
		</div>
	);
};
