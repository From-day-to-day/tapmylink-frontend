import cc from 'classcat';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'preact/compat';

import styles from './textControl.module.css';

export const Input = forwardRef(
	(
		{ className, ...props }: InputHTMLAttributes,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		return (
			<input
				{...props}
				className={cc([styles.textControl, className])}
				ref={ref}
			/>
		);
	},
);
