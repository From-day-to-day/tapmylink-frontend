import { FiLogIn } from 'react-icons/fi';

import { ELanguage } from '@/shared/enums';

export const ACCOUNT_API_PATH = 'account';
export const CARDS_API_PATH = 'cards';
export const LANGUAGE_ROUTE_PATTERN = `(?:${Object.keys(ELanguage).join('|')})`;
export const DAY_IN_MS = 86_400_000;
export const LoginIcon = FiLogIn;
export const COPIED_TEXT_VISIBILITY_TIMEOUT = 3000;
