import { ETariff } from '@/shared/enums';

export interface User {
  email: string;
  tariffId: ETariff;
}
