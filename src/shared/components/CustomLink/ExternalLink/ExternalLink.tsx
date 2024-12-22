import cc from 'classcat';
import { AnchorHTMLAttributes } from 'preact/compat';
import { IconType } from 'react-icons';

import { InnerLink } from '../InnerLink';

import customLinkStyles from '../customLink.module.css';

interface Props {
	PreIcon?: IconType;
	PostIcon?: IconType;
	text: string;
}

export const ExternalLink = ({
	text,
	PreIcon,
	PostIcon,
	href,
	className,
	...props
}: Props & AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<a
			href={href}
			{...props}
			className={cc([customLinkStyles.customLink, className])}
		>
			<InnerLink PreIcon={PreIcon} PostIcon={PostIcon} text={text} />
		</a>
	);
};
