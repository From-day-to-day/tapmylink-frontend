import { ELanguage } from '@/shared/enums';

const messages = {
	[ELanguage.ru]: {
		footerText:
			'Сайт не несет ответственности за ссылки, размещаемые пользователями. ' +
			'Администрация оставляет за собой право удалять ссылки на запрещённые или незаконные ресурсы. ' +
			'Если вы заметили неподобающий контент, пожалуйста, сообщите нам.',
	},
	[ELanguage.en]: {
		footerText:
			'The site is not responsible for links posted by users. ' +
			'The administration reserves the right to remove links to prohibited or illegal resources. ' +
			'If you notice inappropriate content, please report it to us.',
	},
	[ELanguage.es]: {
		footerText:
			'El sitio no se hace responsable de los enlaces publicados por los usuarios. ' +
			'La administración se reserva el derecho de eliminar enlaces a recursos prohibidos o ilegales. ' +
			'Si nota contenido inapropiado, infórmenos.',
	},
};

export default messages;
