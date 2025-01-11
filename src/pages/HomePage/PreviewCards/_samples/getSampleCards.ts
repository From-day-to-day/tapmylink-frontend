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
				url: 'https://youtube.com',
				title: messages[lang].oneYoutube,
			},
			{
				id: 2,
				url: 'https://instagram.com',
				title: messages[lang].oneInstagram,
			},
			{
				id: 3,
				url: 'https://spotify.com',
				title: messages[lang].oneSpotify,
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
				url: 'https://tiktok.com',
				title: messages[lang].twoTiktok,
			},
			{
				id: 2,
				url: 'https://instagram.com',
				title: messages[lang].twoInstagram,
			},
			{
				id: 3,
				url: 'https://apple.com/music',
				title: messages[lang].twoAppleMusic,
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
				url: 'https://youtube.com',
				title: messages[lang].threeYoutube,
			},
			{
				id: 2,
				url: 'https://twitch.tv',
				title: messages[lang].threeTwitch,
			},
			{
				id: 3,
				url: 'https://reddit.com',
				title: messages[lang].threeReddit,
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
				url: 'https://twitch.tv',
				title: messages[lang].fourTwitch,
			},
			{
				id: 2,
				url: 'https://youtube.com',
				title: messages[lang].fourYoutube,
			},
			{
				id: 3,
				url: 'https://discord.gg',
				title: messages[lang].fourDiscord,
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
				url: 'https://youtube.com',
				title: messages[lang].fiveYoutube,
			},
			{
				id: 2,
				url: 'https://instagram.com',
				title: messages[lang].fiveInstagram,
			},
			{
				id: 3,
				url: 'https://sample-shop777.com',
				title: messages[lang].fiveMerchShop,
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
				url: 'https://youtube.com',
				title: messages[lang].sixYoutube,
			},
			{
				id: 2,
				url: 'https://instagram.com',
				title: messages[lang].sixInstagram,
			},
			{ id: 3, url: 'https://x.com', title: messages[lang].sixTwitter },
		],
	},
];
