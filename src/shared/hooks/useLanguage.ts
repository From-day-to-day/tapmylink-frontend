import { useContext } from 'preact/hooks';

import { LanguageContext } from '@/shared/contexts';

export const useLanguage = () => {
	const languageContext = useContext(LanguageContext);

	if (!languageContext) throw new Error('useLanguage must be defined');

	return languageContext;
};
