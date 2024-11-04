import { LANGUAGE_ROUTE_PATTERN } from '../consts';
import { ELanguage } from '@/shared/enums';

export const getRouteTemplateWithLanguage = (lang?: ELanguage, routeTemplate?: string) =>
  `/${lang ?? LANGUAGE_ROUTE_PATTERN}${routeTemplate ?? ''}`;
