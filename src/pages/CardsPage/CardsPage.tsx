import { Fragment } from 'preact';
import useSWR from 'swr';

import { Loader } from '@/shared/components';
import { Card, ErrorResponse, Tariff } from '@/shared/models';
import { rethrowErrorAsync } from '@/shared/utils';

import { AddCardButton } from './AddCardButton';
import { CardItem } from './CardItem';
import { CARDS_API_PATH } from './consts';

import styles from './cardPage.module.css';

interface Props {
	tariffData?: Tariff;
}

export const CardsPage = ({ tariffData }: Props) => {
	const {
		data: cardsData,
		error,
		isLoading,
	} = useSWR<Card[], ErrorResponse>(CARDS_API_PATH);

	rethrowErrorAsync(error);

	if (isLoading) return <Loader />;
	if (!tariffData || !cardsData) return null;

	return (
		<div className={styles.container}>
			<span>
				<AddCardButton
					isProcessDisabled={cardsData.length === tariffData.cardsLimit}
					cardsLimit={tariffData.cardsLimit}
				/>
			</span>
			<div className={styles.cards}>
				{cardsData.map((card) => (
					<Fragment key={card.id}>
						<CardItem card={card} />
					</Fragment>
				))}
			</div>
		</div>
	);
};
