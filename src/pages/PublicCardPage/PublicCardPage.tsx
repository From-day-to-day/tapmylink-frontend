import { useEffect } from 'preact/hooks';
import useSWR from 'swr';
import { useParams } from 'wouter-preact';

import { CardTemplate } from '@/processes';
import { Loader } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { Card, ErrorResponse } from '@/shared/models';
import { rethrowErrorAsync } from '@/shared/utils';

import { PublicCardRouteParams } from './_models';

export const PublicCardPage = () => {
	const { nickname } = useParams<PublicCardRouteParams>();

	useEffect(() => {
		document.title = nickname;
	}, [nickname]);

	const {
		data: cardData,
		error,
		isLoading,
	} = useSWR<Card, ErrorResponse>(`${CARDS_API_PATH}/public/${nickname}`);

	rethrowErrorAsync(error);

	if (isLoading) return <Loader />;
	if (!cardData) return null;

	return <CardTemplate card={cardData} isFullScreen />;
};
