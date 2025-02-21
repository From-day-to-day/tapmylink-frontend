import useSWRMutation from 'swr/mutation';

import { useLanguage } from '@/shared/hooks';
import { CardLink, ErrorResponse, Card } from '@/shared/models';
import { fetcher } from '@/shared/utils';

import messages from '../messages';

export const useDeleteCardLink = (cacheDataKey?: string) => {
	const { language } = useLanguage();

	const { trigger: triggerDeleteCardLink, isMutating: isDeletingCardLink } =
		useSWRMutation<CardLink, ErrorResponse, string, number, Card>(
			cacheDataKey || '',
			async (_url, { arg: cardLinkId }) =>
				await fetcher<CardLink>(`card-links/${cardLinkId}`, 'DELETE'),
			{
				revalidate: false,
				populateCache: (cardLink, card) => {
					if (!card) throw new Error('Card not found');

					return {
						...card,
						links: card.links?.filter((link) => link.id !== cardLink.id),
					};
				},
			},
		);

	const onDeleteLink = async ({ id, description, url }: CardLink) => {
		if (
			window.confirm(
				messages[language].deleteCardLinkConfirmMessage(description || url),
			)
		) {
			await triggerDeleteCardLink(id);
		}
	};

	return { onDeleteLink, isDeletingCardLink };
};
