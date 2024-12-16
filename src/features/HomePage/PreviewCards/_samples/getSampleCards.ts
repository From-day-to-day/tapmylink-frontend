import { ECardBackground, ELanguage } from '@/shared/enums';
import { Card } from '@/shared/models';

import messages from '../messages';

export const getSampleCards = (lang: ELanguage): Card[] => [
	{
		id: 1,
		title: messages[lang].oneTitle,
		description: messages[lang].oneDescription,
		background: ECardBackground.black,
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
		title: messages[lang].twoTitle,
		description: messages[lang].twoDescription,
		background: ECardBackground.blue,
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
		title: messages[lang].threeTitle,
		description: messages[lang].threeDescription,
		background: ECardBackground.green,
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
		title: messages[lang].fourTitle,
		description: messages[lang].fourDescription,
		background: ECardBackground.orange,
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
		title: messages[lang].fiveTitle,
		description: messages[lang].fiveDescription,
		background: ECardBackground.pink,
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
		title: messages[lang].sixTitle,
		description: messages[lang].sixDescription,
		background: ECardBackground.red,
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
