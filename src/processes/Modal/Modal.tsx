import cc from 'classcat';
import { PropsWithChildren } from 'preact/compat';
import { MdClose } from 'react-icons/md';

import { Button } from '@/shared/components';

import { useLockScroll } from './_hooks';

import styles from './modal.module.css';

interface Props {
	open: boolean;
	hideCloseButton?: boolean;
	hideBackdrop?: boolean;
	className?: string;
	onClose?: () => void;
	centerPosition?: 'x' | 'xy';
}

export const Modal = ({
	open,
	hideCloseButton,
	hideBackdrop,
	className,
	onClose,
	centerPosition,
	children,
}: PropsWithChildren<Props>) => {
	useLockScroll(!hideBackdrop && open);

	return (
		<>
			{open && (
				<dialog
					open
					className={cc([
						styles.modal,
						centerPosition &&
							styles[`modal_center${centerPosition.toUpperCase()}`],
						className,
					])}
				>
					{!hideCloseButton && (
						<Button
							className={styles.modal__closeButton}
							onClick={onClose}
							minSpaces
						>
							<MdClose />
						</Button>
					)}
					{children}
				</dialog>
			)}
			{!hideBackdrop && open && <div className={styles.backdrop} />}
		</>
	);
};
