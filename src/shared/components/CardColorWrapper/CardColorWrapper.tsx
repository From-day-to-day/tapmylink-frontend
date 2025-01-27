import cc from 'classcat';
import { HTMLAttributes, PropsWithChildren } from 'preact/compat';

import { ECardTheme } from '@/shared/enums';

import styles from './cardColorWrapper.module.css';

interface Props {
	theme: ECardTheme | null;
	isFullScreen?: boolean;
}

export const CardColorWrapper = ({
	children,
	theme,
	isFullScreen,
	...divProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement> & Props>) => {
	return (
		<div
			{...divProps}
			className={cc([
				styles.card,
				divProps.className,
				theme !== null && styles[`card_${ECardTheme[theme]}`],
				isFullScreen && styles.card_fullScreen,
			])}
		>
			{children}
		</div>
	);
};
