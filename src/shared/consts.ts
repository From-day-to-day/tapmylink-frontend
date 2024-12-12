import { ELanguage } from '@/shared/enums';

export const ACCOUNT_API_PATH = 'account';

export const LANGUAGE_ROUTE_PATTERN = `(${Object.keys(ELanguage).join('|')})`;

export const DAY_IN_MS = 86_400_000;
