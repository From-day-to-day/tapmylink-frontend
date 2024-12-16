import { Error } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';

import messages from './messages';

export const Error404Page = () => {
	const { language } = useLanguage();

	return <Error message={messages[language].notFoundErrorText} />;
};
