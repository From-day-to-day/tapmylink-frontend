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
		'error.card.getPublicCardByNickName.notFound': () =>
			'Визитки по данному адресу не существует. Проверьте, пожалуйста, адрес.',
	},
	[ELanguage.en]: {
		errorDialogTitle: () => 'An error occurred!',

		_errorPostfix: () =>
			'The developers are already aware of this problem. Please try again later.',
		unknownError: () =>
			`An unknown error has occurred. ${messages[ELanguage.en]._errorPostfix()}`,

		'error.card.create.duplicate': () =>
			'This name for the business card is already taken by other users or by you.',
		'error.card.getPublicCardByNickName.notFound': () =>
			'The business card at this address does not exist. Please check the address.',
	},
	[ELanguage.es]: {
		errorDialogTitle: () => '¡Ocurrió un error!',

		_errorPostfix: () =>
			'Los desarrolladores ya son conscientes de este problema. Por favor, inténtelo de nuevo más tarde.',
		unknownError: () =>
			`Ha ocurrido un error desconocido. ${messages[ELanguage.es]._errorPostfix()}`,

		'error.card.create.duplicate': () =>
			'Este nombre para la tarjeta de presentación ya está ocupado por otros usuarios o por usted.',
		'error.card.getPublicCardByNickName.notFound': () =>
			'La tarjeta de presentación en esta dirección no existe. Por favor, verifique la dirección.',
	},
};

export default messages;
