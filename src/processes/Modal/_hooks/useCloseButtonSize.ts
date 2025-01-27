import { useRef } from 'preact/compat';
import { useState, useEffect, Inputs } from 'preact/hooks';

export const useCloseButtonSize = (deps?: Inputs) => {
	const closeButtonRef = useRef<HTMLButtonElement>(null);

	const [closeButtonSize, setButtonSize] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (closeButtonRef.current) {
			setButtonSize({
				width: closeButtonRef.current.offsetWidth,
				height: closeButtonRef.current.offsetHeight,
			});
		}
	}, [deps]);

	return { closeButtonRef, closeButtonSize };
};
