import cc from 'classcat';
import {
	ButtonHTMLAttributes,
	forwardRef,
	PropsWithChildren,
	ForwardedRef,
} from 'preact/compat';
import { IconType } from 'react-icons';

import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'light' | 'outlined';
	buttonSize?: 'small' | 'medium' | 'large';
	minSpaces?: boolean;
	PreIcon?: IconType;
	PostIcon?: IconType;
}

export const Button = forwardRef(
	(
		{
			variant = 'light',
			buttonSize = 'medium',
			minSpaces,
			PreIcon,
			PostIcon,
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
				{PreIcon && <PreIcon />}
				{props.children}
				{PostIcon && <PostIcon />}
			</button>
		);
	},
);
