import { ELanguage } from '@/shared/enums';

export const switchLanguageInPath = (path: string, newLanguage: ELanguage) => {
	const pathArray = path.split('/');

	pathArray[1] = newLanguage;

	return pathArray.join('/');
};
