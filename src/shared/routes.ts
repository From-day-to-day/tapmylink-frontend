import { ELanguage } from '@/shared/enums';
import { getRouteTemplateWithLanguage } from '@/shared/utils';

export const routes = {
  publicCard: '/u/:nickname',

  home: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang),
  contactCards: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/cards'),
  contactCard: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/cards/:id'),
  tariffs: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/tariffs'),
  auth: (redirectUri: string) =>
    `${import.meta.env.VITE_BACKEND_URL}/oauth2/authorization/google?redirect=${redirectUri}`,
};
