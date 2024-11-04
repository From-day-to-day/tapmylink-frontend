import cc from 'classcat';
import { PropsWithChildren } from 'preact/compat';
import { Dispatch, StateUpdater } from 'preact/hooks';
import { useLockScroll } from './_hooks';
import styles from './modal.module.css';
import { Button } from '@/shared/components';

interface Props {
  open: boolean;
  setIsOpen?: Dispatch<StateUpdater<boolean>>;
  hideCloseButton?: boolean;
  hideBackdrop?: boolean;
  isBackdropBlurred?: boolean;
  className?: string;
  onClose?: () => void;
  centerPosition?: 'x' | 'xy';
}

export const Modal = ({
  open,
  hideCloseButton,
  hideBackdrop,
  isBackdropBlurred,
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
            centerPosition && styles[`modal_center${centerPosition.toUpperCase()}`],
            className,
          ])}
        >
          {!hideCloseButton && (
            <Button variant="outlined" buttonSize="small" className={styles.modal__closeButton} onClick={onClose}>
              ⛌
            </Button>
          )}
          {children}
        </dialog>
      )}
      {!hideBackdrop && open && <div className={cc([styles.backdrop, isBackdropBlurred && styles.backdrop_blurred])} />}
    </>
  );
};
