import { ECardTheme, ELanguage } from '@/shared/enums';
import { Card } from '@/shared/models';

import messages from '../messages';

export const getSampleCards = (lang: ELanguage): Card[] => [
	{
		id: 1,
		name: 'LoganPaulson',
		description: messages[lang].oneDescription,
		theme: ECardTheme.black,
		links: [
			{
				id: 1,
				cardId: 1,
				url: 'https://youtube.com',
				description: messages[lang].oneYoutube,
				position: 1,
			},
			{
				id: 2,
				cardId: 1,
				url: 'https://instagram.com',
				description: messages[lang].oneInstagram,
				position: 2,
			},
			{
				id: 3,
				cardId: 1,
				url: 'https://spotify.com',
				description: messages[lang].oneSpotify,
				position: 3,
			},
		],
	},
	{
		id: 2,
		name: 'CharliMillion',
		description: messages[lang].twoDescription,
		theme: ECardTheme.blue,
		links: [
			{
				id: 1,
				cardId: 2,
				url: 'https://tiktok.com',
				description: messages[lang].twoTiktok,
				position: 1,
			},
			{
				id: 2,
				cardId: 2,
				url: 'https://instagram.com',
				description: messages[lang].twoInstagram,
				position: 2,
			},
			{
				id: 3,
				cardId: 2,
				url: 'https://apple.com/music',
				description: messages[lang].twoAppleMusic,
				position: 3,
			},
		],
	},
	{
		id: 3,
		name: 'FelixPie',
		description: messages[lang].threeDescription,
		theme: ECardTheme.green,
		links: [
			{
				id: 1,
				cardId: 3,
				url: 'https://youtube.com',
				description: messages[lang].threeYoutube,
				position: 1,
			},
			{
				id: 2,
				cardId: 3,
				url: 'https://twitch.tv',
				description: messages[lang].threeTwitch,
				position: 2,
			},
			{
				id: 3,
				cardId: 3,
				url: 'https://reddit.com',
				description: messages[lang].threeReddit,
				position: 3,
			},
		],
	},
	{
		id: 4,
		name: 'PokkiLane',
		description: messages[lang].fourDescription,
		theme: ECardTheme.orange,
		links: [
			{
				id: 1,
				cardId: 4,
				url: 'https://twitch.tv',
				description: messages[lang].fourTwitch,
				position: 1,
			},
			{
				id: 2,
				cardId: 4,
				url: 'https://youtube.com',
				description: messages[lang].fourYoutube,
				position: 2,
			},
			{
				id: 3,
				cardId: 4,
				url: 'https://discord.gg',
				description: messages[lang].fourDiscord,
				position: 3,
			},
		],
	},
	{
		id: 5,
		name: 'JimmyBeast',
		description: messages[lang].fiveDescription,
		theme: ECardTheme.pink,
		links: [
			{
				id: 1,
				cardId: 5,
				url: 'https://youtube.com',
				description: messages[lang].fiveYoutube,
				position: 1,
			},
			{
				id: 2,
				cardId: 5,
				url: 'https://instagram.com',
				description: messages[lang].fiveInstagram,
				position: 2,
			},
			{
				id: 3,
				cardId: 5,
				url: 'https://sample-shop777.com',
				description: messages[lang].fiveMerchShop,
				position: 3,
			},
		],
	},
	{
		id: 6,
		name: 'LinusTechno',
		description: messages[lang].sixDescription,
		theme: ECardTheme.red,
		links: [
			{
				id: 1,
				cardId: 6,
				url: 'https://youtube.com',
				description: messages[lang].sixYoutube,
				position: 1,
			},
			{
				id: 2,
				cardId: 6,
				url: 'https://instagram.com',
				description: messages[lang].sixInstagram,
				position: 2,
			},
			{
				id: 3,
				cardId: 6,
				url: 'https://x.com',
				description: messages[lang].sixTwitter,
				position: 3,
			},
		],
	},
];
