import cc from 'classcat';
import { HTMLAttributes, PropsWithChildren } from 'preact/compat';

import { ECardTheme } from '@/shared/enums';

import styles from './cardColorWrapper.module.css';

interface Props {
	theme: ECardTheme | null;
}

export const CardColorWrapper = ({
	children,
	theme,
	...divProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & Props>) => {
	return (
		<div
			{...divProps}
			className={cc([
				divProps.className,
				theme !== null && styles[ECardTheme[theme]],
			])}
		>
			{children}
		</div>
	);
};
