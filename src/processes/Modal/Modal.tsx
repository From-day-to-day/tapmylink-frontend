import cc from 'classcat';
import { PropsWithChildren } from 'preact/compat';
import { MdClose } from 'react-icons/md';

import { Button } from '@/shared/components';

import { EXTRA_MODAL_SPACING } from './_consts';
import { useCloseButtonSize, useLockScroll } from './_hooks';

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
	const { closeButtonRef, closeButtonSize } = useCloseButtonSize([open]);

	return (
		<>
			{open && (
				<dialog
					open
					className={cc([
						styles.modal,
						centerPosition &&
							styles[`modal_center${centerPosition.toUpperCase()}`],
						!closeButtonSize.width && styles.modal_processing,
						className,
					])}
					style={{
						padding: `${closeButtonSize.height + EXTRA_MODAL_SPACING}px
						${closeButtonSize.width + EXTRA_MODAL_SPACING}px`,
					}}
				>
					{!hideCloseButton && (
						<Button
							ref={closeButtonRef}
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
