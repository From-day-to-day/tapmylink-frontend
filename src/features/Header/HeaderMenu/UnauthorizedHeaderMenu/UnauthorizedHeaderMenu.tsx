import { useLocation } from 'wouter-preact';

import { ExternalLink } from '@/shared/components';
import { LoginIcon } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

export const UnauthorizedHeaderMenu = () => {
	const { language } = useLanguage();
	const [location] = useLocation();

	return (
		<li>
			<ExternalLink
				href={routes.auth(location)}
				text={messages[language].loginMenuItem}
				PostIcon={LoginIcon}
			/>
		</li>
	);
};
