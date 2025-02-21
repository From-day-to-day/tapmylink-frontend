import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import useSWRMutation from 'swr/mutation';
import { useLocation } from 'wouter-preact';

import { Modal, HelpButton } from '@/processes';
import { Button, Form, Input } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { useFieldFocus, useLanguage } from '@/shared/hooks';
import { Card, ErrorResponse } from '@/shared/models';
import { routes } from '@/shared/routes';
import { trimAndMapFormData, fetcher } from '@/shared/utils';

import { MAX_CARD_NAME_LENGTH, MIN_CARD_NAME_LENGTH } from './_consts';
import { CardFormData } from './_models';
import messages from './messages';

import styles from './addCardButton.module.css';

interface Props {
	isProcessDisabled: boolean;
	cardsLimit: number;
}

export const AddCardButton = ({ isProcessDisabled, cardsLimit }: Props) => {
	const { language } = useLanguage();
	const [, navigate] = useLocation();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const addCardFieldRef = useFieldFocus([isModalOpen]);

	const { trigger: triggerAdd, isMutating: isAddCardMutating } = useSWRMutation<
		Card,
		ErrorResponse,
		string,
		CardFormData,
		Card[]
	>(
		CARDS_API_PATH,
		async (_url, { arg }) =>
			await fetcher<Card, CardFormData>(CARDS_API_PATH, 'PUT', arg),
		{
			revalidate: false,
			populateCache: (addedCard, dictionary) => {
				return [addedCard, ...(dictionary ?? [])];
			},
			onSuccess: () => {
				setIsModalOpen(false);
			},
		},
	);

	const onAddCardClick = () => setIsModalOpen(true);

	const onCloseModalClick = () => setIsModalOpen(false);

	const onAddCardSubmitForm = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
		e.preventDefault();

		const currentTarget = e.currentTarget;

		const response = await triggerAdd(
			trimAndMapFormData<CardFormData>(currentTarget),
		);

		currentTarget.reset();
		navigate(routes.editCard(response.id, language));
	};

	return (
		<>
			<div className={styles.openModalButtonContainer}>
				<Button
					variant="primary"
					disabled={isProcessDisabled}
					onClick={onAddCardClick}
				>
					{messages[language].creatingButtonText}
				</Button>
				{isProcessDisabled && (
					<HelpButton
						modalDescription={messages[language].cardLimitHint(cardsLimit)}
					/>
				)}
			</div>
			<Modal open={isModalOpen} onClose={onCloseModalClick} centerPosition="xy">
				<Form
					onSubmit={onAddCardSubmitForm}
					hints={[
						messages[language].cardNameRulesHint,
						messages[language].acceptableContentHint,
					]}
				>
					<Input
						ref={addCardFieldRef}
						placeholder={messages[language].cardNamePlaceholder}
						disabled={isAddCardMutating}
						name="name"
						minlength={MIN_CARD_NAME_LENGTH}
						maxlength={MAX_CARD_NAME_LENGTH}
						pattern="^[a-zA-Z0-9]+$"
						required
					/>
					<Button
						variant="primary"
						buttonSize="small"
						disabled={isAddCardMutating}
					>
						{messages[language].createButtonText}
					</Button>
				</Form>
			</Modal>
		</>
	);
};
