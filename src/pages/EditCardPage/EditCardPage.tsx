import useSWR from 'swr';
import { useParams } from 'wouter-preact';

import { CardTemplate } from '@/processes';
import { Loader } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { Card, ErrorResponse, Tariff } from '@/shared/models';
import { rethrowErrorAsync } from '@/shared/utils';

import { EditCardRouteParams } from './_models';

import styles from './editCardPage.module.css';

interface Props {
	tariffData?: Tariff;
}

export const EditCardPage = ({ tariffData }: Props) => {
	const { id } = useParams<EditCardRouteParams>();
	const cacheDataKey = `${CARDS_API_PATH}/my/${id}`;

	const {
		data: cardData,
		error,
		isLoading,
	} = useSWR<Card, ErrorResponse>(cacheDataKey);

	rethrowErrorAsync(error);

	if (isLoading) return <Loader />;
	if (!cardData) return null;

	return (
		<div className={styles.card}>
			<CardTemplate
				card={cardData}
				isEditable
				hideFooter
				hideDescription={!tariffData?.hasCardDescription}
				cacheDataKey={cacheDataKey}
			/>
		</div>
	);
};
