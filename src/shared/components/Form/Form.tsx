import cc from 'classcat';
import { FormHTMLAttributes, PropsWithChildren } from 'preact/compat';

import styles from './form.module.css';

export const Form = ({
	children,
	...formProps
}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) => {
	return (
		<form {...formProps} className={cc([formProps.className, styles.form])}>
			{children}
		</form>
	);
};
