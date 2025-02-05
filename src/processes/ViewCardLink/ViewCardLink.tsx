import { FaEye } from 'react-icons/fa6';

import { ExternalLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { routes } from '@/shared/routes';

import messages from './messages';

interface Props {
	cardName: string;
	linkClassName?: string;
}

export const ViewCardLink = ({ cardName, linkClassName }: Props) => {
	const { language } = useLanguage();

	return (
		<ExternalLink
			className={linkClassName}
			href={routes.publicCard(cardName)}
			PreIcon={FaEye}
			target="_blank"
			text={messages[language].viewCardButtonText}
		/>
	);
};
