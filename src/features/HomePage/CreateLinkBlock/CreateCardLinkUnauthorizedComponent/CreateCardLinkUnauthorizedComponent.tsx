import { ExternalLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

export const CreateCardLinkUnauthorizedComponent = () => {
	const { language } = useLanguage();

	return (
		<ExternalLink
			href={routes.auth(routes.cards(language))}
			text={messages[language].createCardLinkText}
		/>
	);
};
