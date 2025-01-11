import { ELanguage } from '@/shared/enums';

export default {
	[ELanguage.ru]: {
		deleteCardConfirmMessage: (cardName: string) =>
			'Вы уверены, что хотите удалить визитку «' +
			cardName +
			'»? Это действие нельзя отменить.',
	},
	[ELanguage.en]: {
		deleteCardConfirmMessage: (cardName: string) =>
			'Are you sure you want to delete the business card "' +
			cardName +
			'"? This action cannot be undone.',
	},
	[ELanguage.es]: {
		deleteCardConfirmMessage: (cardName: string) =>
			'¿Está seguro de que desea eliminar la tarjeta de presentación "' +
			cardName +
			'"? Esta acción no se puede deshacer.',
	},
};
