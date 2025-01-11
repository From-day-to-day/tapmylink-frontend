import { ELanguage } from '@/shared/enums';
import { getRouteTemplateWithLanguage } from '@/shared/utils';

export const routes = {
	publicCard: (nickName?: string) => `/u/${nickName ? nickName : ':nickname'}`,

	home: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang),
	cards: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/cards'),
	editCard: (cardId?: number, lang?: ELanguage) =>
		getRouteTemplateWithLanguage(lang, `/cards/${cardId ?? ':id'}`),
	tariffs: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/tariffs'),
	auth: (redirectUri: string) =>
		`${import.meta.env.VITE_BACKEND_URL}/oauth2/authorization/google?redirect=${redirectUri}`,
};
