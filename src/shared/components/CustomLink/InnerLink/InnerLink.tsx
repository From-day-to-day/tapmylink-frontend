import cc from 'classcat';
import { IconType } from 'react-icons';

import styles from './innerLink.module.css';
import customLinkStyles from '../customLink.module.css';

interface Props {
	text: string;
	PreIcon?: IconType;
	PostIcon?: IconType;
}

export const InnerLink = ({ text, PreIcon, PostIcon }: Props) => {
	return (
		<span
			className={cc([styles.innerLink, customLinkStyles.customLink__inner])}
		>
			{PreIcon && <PreIcon />}
			{text}
			{PostIcon && <PostIcon />}
		</span>
	);
};
