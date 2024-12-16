import { useEffect } from 'preact/hooks';

import styles from '../modal.module.css';

export const useLockScroll = (enabled: boolean) => {
	useEffect(() => {
		if (!enabled) return;

		const bodyClassList = document.body.classList;

		bodyClassList.add(styles.lockScroll);

		return () => {
			bodyClassList.remove(styles.lockScroll);
		};
	}, [enabled]);
};
