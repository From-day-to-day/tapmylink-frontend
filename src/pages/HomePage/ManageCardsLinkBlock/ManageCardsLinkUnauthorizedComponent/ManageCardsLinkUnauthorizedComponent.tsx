import { ExternalLink } from '@/shared/components';
import { LoginIcon } from '@/shared/consts';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

export const ManageCardsLinkUnauthorizedComponent = () => {
	const { language } = useLanguage();

	return (
		<ExternalLink
			href={routes.auth(routes.cards(language))}
			text={messages[language].createCardLinkText}
			PostIcon={LoginIcon}
		/>
	);
};
