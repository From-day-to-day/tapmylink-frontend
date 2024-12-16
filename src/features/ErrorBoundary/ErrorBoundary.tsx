import { PropsWithChildren } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';

import { useLanguage } from '@/shared/hooks';
import { Modal } from '@/shared/processes';

import { useErrorHandler } from './_hooks';
import messages from './messages';

import styles from './errorBoundary.module.css';

export const ErrorBoundary = ({ children }: PropsWithChildren) => {
	const { language } = useLanguage();
	const [errors, setErrors] = useState<string[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useErrorHandler(setErrors);

	const onErrorModalClose = () => {
		setErrors([]);
		setIsModalOpen(false);
	};

	useEffect(() => {
		if (errors.length > 0) setIsModalOpen(true);
	}, [errors]);

	return (
		<>
			{children}
			<Modal
				open={isModalOpen}
				className={styles.errorDialog}
				onClose={onErrorModalClose}
				hideBackdrop
			>
				<header className={styles.errorDialog__header}>
					<h4>{messages[language].errorDialogTitle()}</h4>
				</header>
				<ul className={styles.errorDialog__list}>
					{errors.map((error, index) => (
						<li key={index}>{error}</li>
					))}
				</ul>
			</Modal>
		</>
	);
};
