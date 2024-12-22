import cc from 'classcat';
import { IconType } from 'react-icons';
import { Link, LinkProps } from 'wouter-preact';

import { InnerLink } from '../InnerLink';

import customLinkStyles from '../customLink.module.css';

interface Props {
	PreIcon?: IconType;
	PostIcon?: IconType;
	text: string;
	href: string;
}

type WouterLinkProps = Omit<LinkProps, 'href' | 'to'> & {
	className?: string | ((isActive: boolean) => string);
};

export const InternalLink = ({
	PreIcon,
	PostIcon,
	href,
	text,
	className,
	...props
}: WouterLinkProps & Props) => {
	return (
		<Link
			{...props}
			href={href}
			className={(isActive) =>
				cc([
					customLinkStyles.customLink,
					typeof className === 'function' ? className(isActive) : className,
				])
			}
		>
			<InnerLink PreIcon={PreIcon} PostIcon={PostIcon} text={text} />
		</Link>
	);
};
