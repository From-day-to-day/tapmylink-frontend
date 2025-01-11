import cc from 'classcat';
import { ButtonHTMLAttributes, PropsWithChildren } from 'preact/compat';

import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'contained' | 'outlined' | 'text';
	buttonSize?: 'small' | 'medium' | 'large';
	minSpaces?: boolean;
}

export const Button = ({
	variant = 'text',
	buttonSize = 'medium',
	minSpaces,
	...props
}: PropsWithChildren<Props>) => {
	return (
		<button
			{...props}
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
};
