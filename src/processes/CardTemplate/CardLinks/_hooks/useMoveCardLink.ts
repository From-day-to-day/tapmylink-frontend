import useSWRMutation from 'swr/mutation';

import { ErrorResponse, Card, CardLink } from '@/shared/models';
import { fetcher } from '@/shared/utils';

import {
	FromCardLinkPosition,
	ToCardLinkPosition,
	FromCardLinkId,
	ToCardLinkId,
} from '../_models';

export const useMoveCardLink = (cacheDataKey?: string) => {
	const { trigger: triggerMoveCard, isMutating: isMovingCardLink } =
		useSWRMutation<
			[FromCardLinkPosition, ToCardLinkPosition],
			ErrorResponse,
			string,
			[CardLink['id'], FromCardLinkId, ToCardLinkId],
			Card
		>(
			cacheDataKey || '',
			async (_url, { arg: [cardId, fromCardLinkId, toCardLinkId] }) =>
				await fetcher(
					`card-links/${cardId}/${fromCardLinkId}/${toCardLinkId}`,
					'PATCH',
				),
			{
				revalidate: false,
				populateCache: ([fromCardLinkPosition, toCardLinkPosition], card) => {
					if (!card) throw new Error('Card not found');

					return {
						...card,
						links: card.links
							?.map((link) => {
								if (link.position === fromCardLinkPosition) {
									return { ...link, position: toCardLinkPosition };
								}

								if (link.position === toCardLinkPosition) {
									return { ...link, position: fromCardLinkPosition };
								}

								return link;
							})
							.sort((a, b) => a.position - b.position),
					};
				},
			},
		);

	return { triggerMoveCard, isMovingCardLink };
};
