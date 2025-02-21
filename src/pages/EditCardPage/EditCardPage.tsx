import useSWR from 'swr';
import { useParams } from 'wouter-preact';

import { ViewCardLink, CardTemplate } from '@/processes';
import { Button, Loader } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { useCopyCard, useLanguage } from '@/shared/hooks';
import { Card, ErrorResponse, Tariff } from '@/shared/models';
import { rethrowErrorAsync } from '@/shared/utils';

import { EditCardRouteParams } from './_models';
import { EditCardTheme } from './EditCardTheme';
import messages from './messages';

import styles from './editCardPage.module.css';

interface Props {
	tariffData?: Tariff;
}

export const EditCardPage = ({ tariffData }: Props) => {
	const { id } = useParams<EditCardRouteParams>();
	const { language } = useLanguage();

	const cacheDataKey = `${CARDS_API_PATH}/my/${id}`;

	const {
		data: cardData,
		error,
		isLoading,
	} = useSWR<Card, ErrorResponse>(cacheDataKey);

	const { isCopiedCard, onCopyCard } = useCopyCard(cardData?.name);

	rethrowErrorAsync(error);

	if (isLoading) return <Loader />;
	if (!cardData) return null;

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<Button
					variant="outlined"
					onClick={onCopyCard}
					disabled={isCopiedCard}
					buttonSize="small"
				>
					{isCopiedCard
						? messages[language].copiedText
						: messages[language].copyCardButtonText}
				</Button>
				<ViewCardLink cardName={cardData.name} />
			</div>
			<EditCardTheme
				id={cardData.id}
				theme={cardData.theme}
				tariffData={tariffData}
				cacheDataKey={cacheDataKey}
			/>
			<div className={styles.card}>
				<CardTemplate
					card={cardData}
					hideFooter
					tariffData={tariffData}
					cacheDataKey={cacheDataKey}
				/>
			</div>
		</div>
	);
};
