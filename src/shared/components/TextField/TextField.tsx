import cc from 'classcat';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'preact/compat';

import styles from './textField.module.css';

export const TextField = forwardRef(
	(
		props: HTMLAttributes<HTMLInputElement>,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		return (
			<input
				{...props}
				className={cc([styles.textField, props.className])}
				ref={ref}
			/>
		);
	},
);
