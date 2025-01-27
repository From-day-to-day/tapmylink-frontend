import { FaRegTrashCan } from 'react-icons/fa6';
import useSWRMutation from 'swr/mutation';

import { Button } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { Card, ErrorResponse } from '@/shared/models';
import { fetcher } from '@/shared/utils';

import messages from './messages';

interface Props {
	cardId: number;
	cardName: string;
}

export const RemoveCardButton = ({ cardId, cardName }: Props) => {
	const { language } = useLanguage();

	const { trigger: triggerDelete, isMutating: isDeleteCardMutating } =
		useSWRMutation<Card, ErrorResponse, string, never, Card[]>(
			CARDS_API_PATH,
			async () => await fetcher(`${CARDS_API_PATH}/${cardId}`, 'DELETE'),
			{
				revalidate: false,
				populateCache: (_, dictionary) =>
					dictionary?.filter((item) => item.id !== cardId) ?? [],
			},
		);

	const onDeleteCard = async () => {
		if (window.confirm(messages[language].deleteCardConfirmMessage(cardName))) {
			await triggerDelete();
		}
	};

	return (
		<>
			<Button disabled={isDeleteCardMutating} onClick={onDeleteCard} minSpaces>
				<FaRegTrashCan />
			</Button>
		</>
	);
};
