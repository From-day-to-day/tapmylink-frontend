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
} from 'react-icons/fa6';
import { SiApplemusic, SiBoosty } from 'react-icons/si';

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
  'x.com': <FaXTwitter />,
  'vk.com': <FaVk />,
  'apple.com': <SiApplemusic />,
  'boosty.to': <SiBoosty />,
};
