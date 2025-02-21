import { ECardTheme } from '../enums';

export interface Card {
	id: number;
	name: string;
	description?: string;
	links?: CardLink[];
	theme: ECardTheme | null;
}

export interface CardLink {
	id: number;
	cardId: number;
	url: string;
	description?: string;
	position: number;
}
