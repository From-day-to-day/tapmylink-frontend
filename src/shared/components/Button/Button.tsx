import cc from 'classcat';
import { HTMLAttributes, PropsWithChildren } from 'preact/compat';
import styles from './button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  buttonSize?: 'small' | 'medium';
}

export const Button = ({ variant = 'contained', buttonSize = 'medium', ...props }: PropsWithChildren<Props>) => {
  return (
    <button
      {...props}
      className={cc([styles.button, styles['button_' + variant], styles['button_' + buttonSize], props.className])}
    >
      {props.children}
    </button>
  );
};
