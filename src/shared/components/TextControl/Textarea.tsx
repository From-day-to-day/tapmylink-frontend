import cc from 'classcat';
import {
	ForwardedRef,
	forwardRef,
	PropsWithChildren,
	TextareaHTMLAttributes,
} from 'preact/compat';

import styles from './textControl.module.css';

export const Textarea = forwardRef(
	(
		{
			className,
			children,
			...props
		}: PropsWithChildren<TextareaHTMLAttributes>,
		ref: ForwardedRef<HTMLTextAreaElement>,
	) => {
		return (
			<textarea
				{...props}
				className={cc([styles.textControl, className])}
				ref={ref}
				rows={3}
			>
				{children}
			</textarea>
		);
	},
);
