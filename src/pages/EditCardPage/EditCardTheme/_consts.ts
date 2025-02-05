import { ECardTheme } from '@/shared/enums';

export const CARD_COLORS = [
	null,
	...Object.values(ECardTheme).filter((theme) => typeof theme === 'number'),
];
