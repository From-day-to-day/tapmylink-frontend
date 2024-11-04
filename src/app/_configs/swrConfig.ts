import { SWRConfiguration } from 'swr';
import { fetcher } from '@/shared/utils';

export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  shouldRetryOnError: false,
  fetcher,
};
