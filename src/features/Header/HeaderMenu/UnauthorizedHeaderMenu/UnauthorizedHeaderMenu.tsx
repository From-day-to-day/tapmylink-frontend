import { useLocation } from 'wouter-preact';

import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

export const UnauthorizedHeaderMenu = () => {
	const { language } = useLanguage();
	const [location] = useLocation();

	return (
		<li>
			<a href={routes.auth(location)}>{messages[language].loginMenuItem}</a>
		</li>
	);
};
