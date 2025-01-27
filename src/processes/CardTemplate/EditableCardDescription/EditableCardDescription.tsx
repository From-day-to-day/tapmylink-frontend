import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { useRef } from 'react';
import useSWRMutation from 'swr/mutation';

import { Textarea, Form, Button } from '@/shared/components';
import { CARDS_API_PATH } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { Card, ErrorResponse } from '@/shared/models';
import { trimAndMapFormData, fetcher, rethrowErrorAsync } from '@/shared/utils';

import { MAX_DESCRIPTION_FIELD_LENGTH } from './_consts';
import { CardFormData } from './_models';
import messages from './messages';

interface Props {
	id: number;
	cacheDataKey: string;
	description?: string;
}

export const EditableCardDescription = ({
	id,
	description,
	cacheDataKey,
}: Props) => {
	const { language } = useLanguage();
	const cardDescriptionRef = useRef<HTMLTextAreaElement>(null);
	const [isDescriptionFieldDisabled, setIsDescriptionFieldDisabled] =
		useState(true);

	const { error, isMutating, trigger } = useSWRMutation<
		Card,
		ErrorResponse,
		string,
		CardFormData
	>(
		cacheDataKey,
		async (_url, { arg }) =>
			await fetcher(`${CARDS_API_PATH}/${id}/description`, 'PATCH', arg),
	);

	rethrowErrorAsync(error);

	const onSubmitDescriptionForm = async (
		e: JSX.TargetedEvent<HTMLFormElement>,
	) => {
		e.preventDefault();

		const currentTarget = e.currentTarget;

		await trigger(trimAndMapFormData<CardFormData>(currentTarget), {
			revalidate: false,
		});
		setIsDescriptionFieldDisabled(true);
	};

	const onChangeDescription = () => {
		setIsDescriptionFieldDisabled(false);
	};

	return (
		<Form onSubmit={onSubmitDescriptionForm}>
			<Textarea
				ref={cardDescriptionRef}
				placeholder={messages[language].fieldDescriptionPlaceholder}
				disabled={isMutating}
				name="description"
				onChange={onChangeDescription}
				maxLength={MAX_DESCRIPTION_FIELD_LENGTH}
			>
				{description}
			</Textarea>
			<Button
				buttonSize="small"
				disabled={isMutating || isDescriptionFieldDisabled}
			>
				{messages[language].saveButtonText}
			</Button>
		</Form>
	);
};
