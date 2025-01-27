import { useEffect } from 'preact/hooks';

import { useLanguage } from '@/shared/hooks';

import messages from './messages';

export const BrowserTitle = () => {
	const { language } = useLanguage();

	useEffect(() => {
		document.title = messages[language].browserTitle;
	}, [language]);

	return null;
};
