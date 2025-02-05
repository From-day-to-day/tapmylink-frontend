import { ELanguage } from '@/shared/enums';

const messages = {
	[ELanguage.ru]: {
		fieldDescriptionPlaceholder: 'Введите описание',
		saveButtonText: 'Сохранить описание',
		noPremiumHint:
			'Описание визитки недоступно на этом тарифе. Для добавления описания перейдите на другой тариф.',
	},
	[ELanguage.en]: {
		fieldDescriptionPlaceholder: 'Enter a description',
		saveButtonText: 'Save description',
		noPremiumHint:
			'Description is not available on this plan. To add a description, switch to another plan.',
	},
	[ELanguage.es]: {
		fieldDescriptionPlaceholder: 'Introduce una descripción',
		saveButtonText: 'Guardar descripción',
		noPremiumHint:
			'La descripción no está disponible en este plan. Para agregar una descripción, cambia a otro plan.',
	},
};

export default messages;
