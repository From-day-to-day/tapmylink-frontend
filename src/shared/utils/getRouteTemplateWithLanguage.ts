import { ELanguage } from '@/shared/enums';

import { LANGUAGE_ROUTE_PATTERN } from '../consts';

export const getRouteTemplateWithLanguage = (
	lang?: ELanguage,
	routeTemplate?: string,
) => `/${lang ?? LANGUAGE_ROUTE_PATTERN}${routeTemplate ?? ''}`;
