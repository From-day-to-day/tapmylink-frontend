import { ELanguage } from '@/shared/enums';

export default {
	[ELanguage.ru]: {
		addCardLinkButtonText: `Добавить ссылку`,
		deleteCardLinkConfirmMessage: (cardLinkDescription: string) =>
			'Вы уверены, что хотите удалить ссылку «' +
			cardLinkDescription +
			'»? Это действие нельзя отменить.',
		linksLimitMessage: (linksLimit: number) =>
			`На вашем тарифном плане можно добавить только ${linksLimit} визиток.`,
	},
	[ELanguage.en]: {
		addCardLinkButtonText: `Add link`,
		deleteCardLinkConfirmMessage: (cardLinkDescription: string) =>
			`Are you sure you want to delete the link “${cardLinkDescription}”? This action cannot be undone.`,
		linksLimitMessage: (linksLimit: number) =>
			`Your plan allows you to add only ${linksLimit} business cards.`,
	},
	[ELanguage.es]: {
		addCardLinkButtonText: `Agregar enlace`,
		deleteCardLinkConfirmMessage: (cardLinkDescription: string) =>
			`¿Estás seguro de que deseas eliminar el enlace “
			${cardLinkDescription}
			”? Esta acción no se puede deshacer.`,
		linksLimitMessage: (linksLimit: number) =>
			`Tu plan solo permite agregar ${linksLimit} tarjetas de presentación.`,
	},
};
