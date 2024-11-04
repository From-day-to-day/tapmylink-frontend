import { ELanguage } from '@/shared/enums';
import { getRouteTemplateWithLanguage } from '@/shared/utils';

export const routes = {
  home: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang),
  cards: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/cards'),
  tariffs: (lang?: ELanguage) => getRouteTemplateWithLanguage(lang, '/tariffs'),
  auth: (pathname: string) => `${import.meta.env.VITE_BACKEND_URL}/oauth2/authorization/google?redirect=${pathname}`,
};
