import { ELanguage } from '@/shared/enums';

export default {
	[ELanguage.ru]: {
		cardLimitHint: (cardLimit: number) =>
			`На вашем тарифном плане действует ограничение (${cardLimit} шт.) на создание новых визиток.`,
	},
	[ELanguage.en]: {
		cardLimitHint: (cardLimit: number) =>
			`Your plan has a limit of (${cardLimit} items) for creating new business cards.`,
	},
	[ELanguage.es]: {
		cardLimitHint: (cardLimit: number) =>
			`Su plan tiene un límite de (${cardLimit} artículos) para crear nuevas tarjetas de presentación.`,
	},
};
