import { Fragment } from 'preact';
import useSWR from 'swr';

import { Loader } from '@/shared/components';
import { ETariff } from '@/shared/enums';
import { useLanguage } from '@/shared/hooks';
import { Tariff, ErrorResponse, User } from '@/shared/models';
import { fetcher, rethrowErrorAsync } from '@/shared/utils';

import { Invoice } from './_models/Invoice';
import messages from './messages';
import { TariffInfo } from './TariffInfo';

import styles from './tariffsPage.module.css';

interface Props {
	userData: User;
}

export const TariffsPage = ({ userData }: Props) => {
	const { language } = useLanguage();
	const {
		data: tariffsData,
		isLoading,
		error,
	} = useSWR<Tariff[], ErrorResponse>('tariffs');

	rethrowErrorAsync(error);

	const onSwitchTariff = async (tariffId: ETariff) => {
		const response = await fetcher<Invoice>(`tariffs/${tariffId}/switch`);
		const paymentWindow = window.open(response.result.link, '_blank');

		if (paymentWindow) {
			paymentWindow.focus();
		} else {
			alert(messages[language].openPaymentWindowError);
		}
	};

	if (isLoading) return <Loader />;
	if (!tariffsData) return null;

	return (
		<div className={styles.tariffs}>
			{tariffsData.map((tariff) => (
				<Fragment key={tariff.id}>
					<TariffInfo
						tariff={tariff}
						currentUserTariffId={userData.tariffId}
						onSwitchTariff={onSwitchTariff}
					/>
				</Fragment>
			))}
		</div>
	);
};
