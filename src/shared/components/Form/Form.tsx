import cc from 'classcat';
import { FormHTMLAttributes, PropsWithChildren } from 'preact/compat';

import styles from './form.module.css';

interface Props {
	hints?: string[];
}

export const Form = ({
	children,
	hints,
	...formProps
}: PropsWithChildren<Props & FormHTMLAttributes<HTMLFormElement>>) => {
	return (
		<form {...formProps} className={cc([formProps.className, styles.form])}>
			{hints && (
				<div className={styles.form__hints}>
					{hints.map((hint, i) => (
						<div key={i}>{hint}</div>
					))}
				</div>
			)}
			{children}
		</form>
	);
};
