import { JSX } from 'preact';
import { Dispatch, StateUpdater } from 'preact/hooks';
import useSWRMutation from 'swr/mutation';

import { Modal } from '@/processes';
import { Button, Form, Input } from '@/shared/components';
import { useLanguage, useFieldFocus } from '@/shared/hooks';
import { Card, CardLink, ErrorResponse } from '@/shared/models';
import { fetcher, trimAndMapFormData } from '@/shared/utils';

import messages from './messages';
import { CardLinkFormData } from '../_models';
import { MAX_CARD_LINK_DESCRIPTION } from './_consts';

interface Props {
	cardId: number;
	cacheDataKey: string;
	currentCardLink: CardLink | null | undefined;
	setCurrentCardLink: Dispatch<StateUpdater<CardLink | null | undefined>>;
}

export const CardControlLinkModal = ({
	cardId,
	cacheDataKey,
	currentCardLink,
	setCurrentCardLink,
}: Props) => {
	const { language } = useLanguage();
	const addCardFieldRef = useFieldFocus([currentCardLink]);

	const { trigger: triggerControlLink, isMutating: isCardLinkControlling } =
		useSWRMutation<CardLink, ErrorResponse, string, CardLinkFormData, Card>(
			cacheDataKey,
			async (_url, { arg }) =>
				await fetcher<CardLink, CardLinkFormData>(
					`card-links/${cardId}${currentCardLink ? `/${currentCardLink.id}` : ''}`,
					currentCardLink ? 'PATCH' : 'PUT',
					arg,
				),
			{
				revalidate: false,
				populateCache: (cardLink, card) => {
					if (!card) throw new Error('Card not found');

					const cardLinks = [...(card.links || [])];

					const index = cardLinks.findIndex(
						(element) => element.id === cardLink.id,
					);

					if (index !== -1) {
						cardLinks[index] = cardLink;
					} else {
						cardLinks.push(cardLink);
					}

					return {
						...card,
						links: cardLinks,
					};
				},
				onSuccess: () => {
					setCurrentCardLink(undefined);
				},
			},
		);

	const onAddCardSubmitForm = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
		e.preventDefault();

		const currentTarget = e.currentTarget;

		await triggerControlLink(
			trimAndMapFormData<CardLinkFormData>(currentTarget),
		);

		currentTarget.reset();
		setCurrentCardLink(undefined);
	};

	const onCloseModalClick = () => {
		setCurrentCardLink(undefined);
	};

	return (
		<Modal
			open={currentCardLink !== undefined}
			onClose={onCloseModalClick}
			centerPosition="xy"
		>
			<Form
				onSubmit={onAddCardSubmitForm}
				hints={[messages[language].linkUrlHint]}
			>
				<Input
					ref={addCardFieldRef}
					placeholder={`* ${messages[language].linkUrl}`}
					disabled={isCardLinkControlling}
					defaultValue={currentCardLink?.url}
					name="url"
					type="url"
					required
				/>
				<Input
					placeholder={messages[language].linkDescription}
					disabled={isCardLinkControlling}
					defaultValue={currentCardLink?.description}
					name="description"
					maxlength={MAX_CARD_LINK_DESCRIPTION}
				/>
				<Button
					variant="primary"
					buttonSize="small"
					disabled={isCardLinkControlling}
				>
					{
						messages[language][
							currentCardLink ? 'editLinkButtonText' : 'saveLinkButtonText'
						]
					}
				</Button>
			</Form>
		</Modal>
	);
};
