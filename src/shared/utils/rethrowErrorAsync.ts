import { ErrorResponse } from '@/shared/models';

export const rethrowErrorAsync = (error?: ErrorResponse | Error) => {
  if (error) {
    requestAnimationFrame(() => {
      throw error;
    });
  }
};
