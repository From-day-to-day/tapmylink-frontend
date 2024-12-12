import { ETariff } from '../enums';

export interface Tariff {
  id: ETariff;
  cardsLimit: number;
  linksLimit: number;
  hasCardDescription: boolean;
  hasCardPalette: boolean;
  price: boolean;
}
