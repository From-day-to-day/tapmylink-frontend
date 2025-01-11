import { ELanguage } from '@/shared/enums';

const messages = {
	[ELanguage.ru]: {
		errorDialogTitle: () => 'Произошла ошибка!',

		_errorPostfix: () =>
			'Об этой проблеме уже знают разработчики. Попробуйте повторить позднее.',
		unknownError: () =>
			`Произошла неизвестная ошибка. ${messages[ELanguage.ru]._errorPostfix()}`,

		'error.card.create.duplicate': () =>
			'Такое имя для визитки уже занято другими пользователями или вами.',
	},
	[ELanguage.en]: {
		errorDialogTitle: () => 'An error occurred!',

		_errorPostfix: () =>
			'The developers are already aware of this problem. Please try again later.',
		unknownError: () =>
			`An unknown error has occurred. ${messages[ELanguage.en]._errorPostfix()}`,

		'error.card.create.duplicate': () =>
			'This name for the business card is already taken by other users or by you.',
	},
	[ELanguage.es]: {
		errorDialogTitle: () => '¡Ocurrió un error!',

		_errorPostfix: () =>
			'Los desarrolladores ya son conscientes de este problema. Por favor, inténtelo de nuevo más tarde.',
		unknownError: () =>
			`Ha ocurrido un error desconocido. ${messages[ELanguage.es]._errorPostfix()}`,

		'error.card.create.duplicate': () =>
			'Este nombre para la tarjeta de presentación ya está ocupado por otros usuarios o por usted.',
	},
};

export default messages;
