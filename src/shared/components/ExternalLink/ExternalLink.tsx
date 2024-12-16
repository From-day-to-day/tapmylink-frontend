import { MdArrowOutward } from 'react-icons/md';

import styles from './externalLink.module.css';

interface Props {
	text: string;
	href: string;
}

export const ExternalLink = ({ text, href }: Props) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			{text}
			<span className={styles.icon}>
				<MdArrowOutward />
			</span>
		</a>
	);
};
