import { ELanguage, ETariff } from '@/shared/enums';

export default {
	[ELanguage.ru]: {
		[ETariff.Basic]: {
			title: 'Базовый',
			description: 'Бесплатный тариф для всех пользователей.',
			privileges: (dictionaryItemLimit: string) => [
				`Вы можете хранить в словаре до ${dictionaryItemLimit} слов.`,
			],
		},
		[ETariff.Premium]: {
			title: 'Премиум',
			description:
				'Никаких подписок. При переходе на этот тариф, вы осуществляете поддержку нашему сервису, ' +
				'а также получаете навсегда следующие преимущества:',
			privileges: (dictionaryItemLimit: string) => [
				`Вы можете хранить в словаре до ${dictionaryItemLimit} слов;`,
				'Индивидуальная помощь по любым вопросам;',
				'Новый режим обучения (в разработке).',
			],
		},
		currentTariffLabel: 'Ваш текущий тариф',
		switchTariffButton: (tariffPrice: string) =>
			`Перейти на тариф за $${tariffPrice}`,
		switchTariffHelpLink: 'Возникли вопросы по оплате? Напишите нам',
	},
	[ELanguage.en]: {
		[ETariff.Basic]: {
			title: 'Basic',
			description: 'Free plan for all users.',
			privileges: (dictionaryItemLimit: string) => [
				`You can store up to ${dictionaryItemLimit} words in the dictionary.`,
			],
		},
		[ETariff.Premium]: {
			title: 'Premium',
			description:
				'No subscriptions. By switching to this plan, you support our service ' +
				'and get the following benefits forever:',
			privileges: (dictionaryItemLimit: string) => [
				`You can store up to ${dictionaryItemLimit} words in the dictionary;`,
				'Individual assistance with any questions;',
				'New learning mode (in development).',
			],
		},
		currentTariffLabel: 'Your current plan',
		switchTariffButton: (tariffPrice: string) =>
			`Switch to the plan for $${tariffPrice}`,
		switchTariffHelpLink: 'Have questions about payment? Contact us',
	},
	[ELanguage.es]: {
		[ETariff.Basic]: {
			title: 'Básico',
			description: 'Plan gratuito para todos los usuarios.',
			privileges: (dictionaryItemLimit: string) => [
				`Puedes almacenar hasta ${dictionaryItemLimit} palabras en el diccionario.`,
			],
		},
		[ETariff.Premium]: {
			title: 'Premium',
			description:
				'Sin suscripciones. Al cambiar a este plan, apoyas nuestro servicio y obtienes ' +
				'los siguientes beneficios para siempre:',
			privileges: (dictionaryItemLimit: string) => [
				`Puedes almacenar hasta ${dictionaryItemLimit} palabras en el diccionario;`,
				'Asistencia individual con cualquier pregunta;',
				'Nuevo modo de aprendizaje (en desarrollo).',
			],
		},
		currentTariffLabel: 'Tu plan actual',
		switchTariffButton: (tariffPrice: string) =>
			`Cambiar al plan por $${tariffPrice}`,
		switchTariffHelpLink: '¿Tienes preguntas sobre el pago? Contáctanos',
	},
};
