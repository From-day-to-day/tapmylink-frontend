import { JSX } from 'preact/compat';
import {
	FaYoutube,
	FaTwitch,
	FaInstagram,
	FaTiktok,
	FaSpotify,
	FaTelegram,
	FaRedditAlien,
	FaDiscord,
	FaPatreon,
	FaXTwitter,
	FaVk,
	FaApple,
} from 'react-icons/fa6';
import { SiBoosty } from 'react-icons/si';

export const iconMap: { [key: string]: JSX.Element } = {
	'youtube.com': <FaYoutube />,
	'twitch.tv': <FaTwitch />,
	'instagram.com': <FaInstagram />,
	'tiktok.com': <FaTiktok />,
	'spotify.com': <FaSpotify />,
	'telegram.org': <FaTelegram />,
	'reddit.com': <FaRedditAlien />,
	'discord.com': <FaDiscord />,
	'patreon.com': <FaPatreon />,
	'vk.com': <FaVk />,
	'apple.com': <FaApple />,
	'boosty.to': <SiBoosty />,

	'x.com': <FaXTwitter />,
	'twitter.com': <FaXTwitter />,
};
