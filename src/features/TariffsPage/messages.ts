import { ELanguage } from '@/shared/enums';

export default {
	[ELanguage.ru]: {
		openPaymentWindowError:
			'Не удалось открыть новую вкладку. Пожалуйста, ' +
			'отключите блокировку всплывающих окон в вашем браузере и попробуйте снова.',
	},
	[ELanguage.en]: {
		openPaymentWindowError:
			'Failed to open a new tab. Please disable the pop-up blocker in your browser and try again.',
	},
	[ELanguage.es]: {
		openPaymentWindowError:
			'No se pudo abrir una nueva pestaña. ' +
			'Por favor, desactive el bloqueador de ventanas emergentes en su navegador y vuelva a intentarlo.',
	},
};
