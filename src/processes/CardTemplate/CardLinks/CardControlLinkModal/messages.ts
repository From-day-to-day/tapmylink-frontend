import { ELanguage } from '@/shared/enums';

const messages = {
	[ELanguage.ru]: {
		linkUrl: 'Введите ссылку',
		linkUrlHint: 'Ваша ссылка должна начинаться на http:// или на https://',
		linkDescription: 'Введите название ссылки',
		saveLinkButtonText: 'Сохранить',
		editLinkButtonText: 'Отредактировать',
	},
	[ELanguage.en]: {
		linkUrl: 'Enter link',
		linkUrlHint: 'Your link should start with http:// or https://',
		linkDescription: 'Enter link title',
		saveLinkButtonText: 'Save',
		editLinkButtonText: 'Edit',
	},
	[ELanguage.es]: {
		linkUrl: 'Ingrese el enlace',
		linkUrlHint: 'Su enlace debe comenzar con http:// o https://',
		linkDescription: 'Ingrese el título del enlace',
		saveLinkButtonText: 'Guardar',
		editLinkButtonText: 'Editar',
	},
};

export default messages;
