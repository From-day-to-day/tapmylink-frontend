import { ELanguage, ETariff } from '@/shared/enums';

export default {
	[ELanguage.ru]: {
		[ETariff.Basic]: {
			title: 'Базовый',
			description: 'Бесплатный тариф для всех пользователей.',
			privileges: (cardsLimit: number, linksLimit: number) => [
				`Вы можете создать ${cardsLimit} визитку и добавить до ${linksLimit} ссылок.`,
			],
		},
		[ETariff.Premium]: {
			title: 'Премиум',
			description:
				'Никаких подписок. При переходе на этот тариф, вы осуществляете поддержку нашему сервису, ' +
				'а также получаете навсегда следующие преимущества:',
			privileges: (cardsLimit: number, linksLimit: number) => [
				`Создавайте до ${cardsLimit} визиток для разных целей — работы, хобби или личных контактов.`,
				`Добавляйте до ${linksLimit} ссылок на каждую визитку — для соцсетей или сайтов. 
				Каждой ссылке можно добавить своё короткое описание.`,
				`Добавляйте текстовое описание, чтобы сделать визитки более информативными.`,
				`Используйте готовые фоны, чтобы выделить свои визитки стильным дизайном.`,
			],
		},
		currentTariffLabel: 'Ваш текущий тариф',
		switchTariffButton: (tariffPrice: number) =>
			`Перейти на тариф за $${tariffPrice}`,
		switchTariffHelpLink: 'Возникли вопросы по оплате? Напишите нам',
	},
	[ELanguage.en]: {
		[ETariff.Basic]: {
			title: 'Basic',
			description: 'Free plan for all users.',
			privileges: (cardsLimit: number, linksLimit: number) => [
				`You can create ${cardsLimit} business card and add up to ${linksLimit} links.`,
			],
		},
		[ETariff.Premium]: {
			title: 'Premium',
			description:
				'No subscriptions. By switching to this plan, you support our service ' +
				'and get the following benefits forever:',
			privileges: (cardsLimit: number, linksLimit: number) => [
				`Create up to ${cardsLimit} business cards for different purposes — work, hobbies, or personal 
				contacts. Add up to ${linksLimit} links to each card — for social networks or websites. 
			You can add a short description to each link.`,
				`Add a text description to make your cards more informative.`,
				`Use preset backgrounds to make your cards stand out with stylish designs.`,
			],
		},
		currentTariffLabel: 'Your current plan',
		switchTariffButton: (tariffPrice: number) =>
			`Switch to the plan for $${tariffPrice}`,
		switchTariffHelpLink: 'Have questions about payment? Contact us',
	},
	[ELanguage.es]: {
		[ETariff.Basic]: {
			title: 'Básico',
			description: 'Plan gratuito para todos los usuarios.',
			privileges: (cardsLimit: number, linksLimit: number) => [
				`Puedes crear ${cardsLimit} tarjeta de presentación y añadir hasta ${linksLimit} enlaces.`,
			],
		},
		[ETariff.Premium]: {
			title: 'Premium',
			description:
				'Sin suscripciones. Al cambiar a este plan, apoyas nuestro servicio y obtienes ' +
				'los siguientes beneficios para siempre:',
			privileges: (cardsLimit: number, linksLimit: number) => [
				`Crea hasta ${cardsLimit} tarjetas de presentación para diferentes propósitos: trabajo, 
				hobbies o contactos personales. Añade hasta 
				${linksLimit} enlaces a cada tarjeta: redes sociales o sitios web. 
			Puedes añadir una breve descripción a cada enlace.`,
				`Añade una descripción de texto para que tus tarjetas sean más informativas.`,
				`Utiliza fondos preestablecidos para que tus tarjetas destaquen con un diseño elegante.`,
			],
		},
		currentTariffLabel: 'Tu plan actual',
		switchTariffButton: (tariffPrice: number) =>
			`Cambiar al plan por $${tariffPrice}`,
		switchTariffHelpLink: '¿Tienes preguntas sobre el pago? Contáctanos',
	},
};
