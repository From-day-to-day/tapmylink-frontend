import { routes } from '@/shared/routes';

export const getPublicCardUrl = (cardName: string) =>
	`${location.origin}${routes.publicCard(cardName)}`;
