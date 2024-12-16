import { ForwardedRef, forwardRef } from 'preact/compat';

import styles from './cardTitle.module.css';

interface Props {
	title: string;
	isEditable?: boolean;
}

export const CardTitle = forwardRef(
	({ title, isEditable }: Props, ref: ForwardedRef<HTMLDivElement>) => {
		return (
			<h2 className={styles.title} contentEditable={isEditable} ref={ref}>
				{title}
			</h2>
		);
	},
);
