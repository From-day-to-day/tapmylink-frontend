import cc from 'classcat';
import {
	ButtonHTMLAttributes,
	forwardRef,
	PropsWithChildren,
	ForwardedRef,
} from 'preact/compat';

import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'light';
	buttonSize?: 'small' | 'medium' | 'large';
	minSpaces?: boolean;
}

export const Button = forwardRef(
	(
		{
			variant = 'light',
			buttonSize = 'medium',
			minSpaces,
			...props
		}: PropsWithChildren<Props>,
		ref: ForwardedRef<HTMLButtonElement>,
	) => {
		return (
			<button
				{...props}
				ref={ref}
				className={cc([
					styles.button,
					styles['button_' + variant],
					styles['button_' + buttonSize],
					minSpaces && styles.button_minSpaces,
					props.className,
				])}
			>
				{props.children}
			</button>
		);
	},
);
