import { JSX } from 'preact';
import { HTMLAttributes } from 'preact/compat';
import { FaLink } from 'react-icons/fa6';

import { CardLink } from '@/shared/models';

import { getDomainAndZone } from './_utils';
import { iconMap } from './consts';

import styles from './cardLinkItem.module.css';

interface Props {
	link: CardLink;
	preComponent?: JSX.Element | null;
	postComponent?: JSX.Element | null;
}

export const CardLinkItem = ({
	link,
	preComponent,
	postComponent,
	...divAttributes
}: Props & HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={styles.container} {...divAttributes}>
			{preComponent}
			<a
				href={link.url}
				title={link.url}
				target="_blank"
				className={styles.link}
				rel="noreferrer"
			>
				{iconMap[getDomainAndZone(link.url)] || <FaLink />}
				{link.description || new URL(link.url).host}
			</a>
			{postComponent}
		</div>
	);
};
