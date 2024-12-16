import { mutate } from 'swr';

import { ErrorResponse } from '@/shared/models';

import { ACCOUNT_API_PATH } from '../consts';

export const fetcher = async <T>(
	url: string,
	method = 'GET',
	payload?: T,
	prefix = import.meta.env.VITE_BACKEND_URL + '/api/',
) => {
	const response = await fetch(prefix + url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: payload ? JSON.stringify(payload) : null,
	});

	if (response.ok) {
		return (await response.json()) as T;
	}

	if (url !== ACCOUNT_API_PATH && response.status === 401) {
		await mutate(ACCOUNT_API_PATH);
	}

	const error = (await response.json()) as ErrorResponse;

	throw new ErrorResponse(error.message, error.httpStatus);
};
