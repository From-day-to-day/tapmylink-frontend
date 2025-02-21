import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { useRef } from 'react';
import useSWRMutation from 'swr/mutation';

import { HelpButton } from '@/processes';
import { Textarea, Form, Button } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { Card, ErrorResponse } from '@/shared/models';
import { trimAndMapFormData, fetcher } from '@/shared/utils';

import { MAX_DESCRIPTION_FIELD_LENGTH } from './_consts';
import { CardFormData } from './_models';
import messages from './messages';

import styles from './editableCardDescription.module.css';

interface Props {
	cardId: number;
	cacheDataKey: string;
	isEnabledByTariff?: boolean;
	description?: string;
}

export const EditableCardDescription = ({
	cardId,
	description,
	cacheDataKey,
	isEnabledByTariff,
}: Props) => {
	const { language } = useLanguage();
	const cardDescriptionRef = useRef<HTMLTextAreaElement>(null);
	const [isFormDisabled, setIsFormDisabled] = useState(true);

	const { isMutating, trigger } = useSWRMutation<
		Card,
		ErrorResponse,
		string,
		CardFormData
	>(
		cacheDataKey,
		async (_url, { arg }) =>
			await fetcher(`${CARDS_API_PATH}/${cardId}/description`, 'PATCH', arg),
	);

	const onSubmitDescriptionForm = async (
		e: JSX.TargetedEvent<HTMLFormElement>,
	) => {
		e.preventDefault();

		const currentTarget = e.currentTarget;

		await trigger(trimAndMapFormData<CardFormData>(currentTarget), {
			revalidate: false,
		});
		setIsFormDisabled(true);
	};

	const onChangeDescription = () => {
		setIsFormDisabled(false);
	};

	return (
		<Form onSubmit={onSubmitDescriptionForm}>
			<Textarea
				ref={cardDescriptionRef}
				placeholder={messages[language].fieldDescriptionPlaceholder}
				disabled={isMutating || !isEnabledByTariff}
				name="description"
				onChange={onChangeDescription}
				maxLength={MAX_DESCRIPTION_FIELD_LENGTH}
			>
				{description}
			</Textarea>
			<div className={styles.buttonWrapper}>
				<Button
					buttonSize="small"
					disabled={isMutating || isFormDisabled || !isEnabledByTariff}
				>
					{messages[language].saveButtonText}
				</Button>
				{!isEnabledByTariff && (
					<HelpButton modalDescription={messages[language].noPremiumHint} />
				)}
			</div>
		</Form>
	);
};
