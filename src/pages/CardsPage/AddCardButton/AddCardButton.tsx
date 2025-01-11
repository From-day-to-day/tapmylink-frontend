import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import useSWRMutation from 'swr/mutation';
import { useLocation } from 'wouter-preact';

import { HelpButton } from '@/containers';
import { Modal } from '@/processes';
import { Button, Form, TextField } from '@/shared/components';
import { useFieldFocus, useLanguage } from '@/shared/hooks';
import { Card, ErrorResponse } from '@/shared/models';
import { routes } from '@/shared/routes';
import { trimAndMapFormData, fetcher } from '@/shared/utils';

import { CARDS_API_PATH } from '../consts';
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
					variant="contained"
					disabled={isProcessDisabled}
					onClick={onAddCardClick}
				>
					{messages[language].creatingButtonText}
				</Button>
				{isProcessDisabled && (
					<HelpButton title={messages[language].cardLimitHint(cardsLimit)} />
				)}
			</div>
			<Modal open={isModalOpen} onClose={onCloseModalClick} centerPosition="xy">
				<Form onSubmit={onAddCardSubmitForm}>
					<div>
						<TextField
							ref={addCardFieldRef}
							placeholder={messages[language].cardNamePlaceholder}
							disabled={isAddCardMutating}
							name="name"
							minlength={3}
							maxlength={50}
							pattern="^[a-zA-Z0-9]+$"
							required
						/>
						<div className={styles.modalFormHint}>
							{messages[language].cardNameRulesHint}
						</div>
						<div className={styles.modalFormHint}>
							{messages[language].acceptableContentHint}
						</div>
					</div>
					<Button
						variant="contained"
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
