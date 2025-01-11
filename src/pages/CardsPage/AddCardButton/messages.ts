import { ELanguage } from '@/shared/enums';

import { MAX_CARD_NAME_LENGTH } from './_consts';

export default {
	[ELanguage.ru]: {
		creatingButtonText: 'Создание новой визитки',
		createButtonText: 'Создать',
		cardNameRulesHint:
			'Название онлайн-визитки должно содержать только латинские буквы, цифры и не может содержать пробелы. ' +
			`Также оно не должно превышать ${MAX_CARD_NAME_LENGTH} символов.`,
		acceptableContentHint:
			'Создавая визитку, вы соглашаетесь, что её название не содержит оскорбительных, ' +
			'политических или запрещённых слов. В противном случае визитка может быть удалена.',
		cardNamePlaceholder: 'Введите название визитки',
		cardLimitHint: (cardLimit: number) =>
			`На вашем тарифном плане действует ограничение (${cardLimit} шт.) на создание новых визиток.`,
	},
	[ELanguage.en]: {
		creatingButtonText: 'Create New Business Card',
		createButtonText: 'Create',
		cardNameRulesHint:
			'The business card name should only contain Latin letters, numbers, and must not contain spaces. ' +
			`It should also not exceed ${MAX_CARD_NAME_LENGTH} characters.`,
		acceptableContentHint:
			'By creating a business card, you agree that its name does not contain offensive, ' +
			'political, or prohibited words. Otherwise, the card may be deleted.',
		cardNamePlaceholder: 'Enter the business card name',
		cardLimitHint: (cardLimit: number) =>
			`Your plan has a limit of (${cardLimit} items) for creating new business cards.`,
	},
	[ELanguage.es]: {
		creatingButtonText: 'Crear nueva tarjeta de presentación',
		createButtonText: 'Crear',
		cardNameRulesHint:
			'El nombre de la tarjeta de presentación solo debe contener letras latinas, ' +
			'números y no debe contener espacios. ' +
			`Tampoco debe superar los ${MAX_CARD_NAME_LENGTH} caracteres.`,
		acceptableContentHint:
			'Al crear una tarjeta de presentación, aceptas que su nombre no contenga palabras ' +
			'offensivas, políticas o prohibidas. De lo contrario, la tarjeta puede ser eliminada.',
		cardNamePlaceholder: 'Introduce el nombre de la tarjeta de presentación',
		cardLimitHint: (cardLimit: number) =>
			`Su plan tiene un límite de (${cardLimit} artículos) para crear nuevas tarjetas de presentación.`,
	},
};
