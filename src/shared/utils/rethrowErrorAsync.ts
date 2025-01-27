import { ErrorResponse } from '@/shared/models';

export const rethrowErrorAsync = (error?: ErrorResponse | Error) => {
	if (error) Promise.reject(error);
};
