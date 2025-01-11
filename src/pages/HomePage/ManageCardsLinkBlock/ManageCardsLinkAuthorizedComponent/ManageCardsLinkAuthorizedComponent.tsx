import { FaList } from 'react-icons/fa6';

import { InternalLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

export const ManageCardsLinkAuthorizedComponent = () => {
	const { language } = useLanguage();

	return (
		<InternalLink
			href={routes.cards(language)}
			text={messages[language].createCardLinkText}
			PreIcon={FaList}
		/>
	);
};
