import { ECardBackground } from '../enums';

export interface Card {
  id: number;
  title: string;
  description?: string;
  links?: CardLink[];
  background: ECardBackground;
}

export interface CardLink {
  id: number;
  url: string;
  title?: string;
}
