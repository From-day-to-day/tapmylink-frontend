import { Link } from 'wouter-preact';

import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

export const CreateCardLinkAuthorizedComponent = () => {
	const { language } = useLanguage();

	return (
		<Link to={routes.createCard(language)}>
			{messages[language].createCardLinkText}
		</Link>
	);
};
