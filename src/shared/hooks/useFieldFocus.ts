import { Inputs, useEffect, useRef } from 'preact/hooks';

export const useFieldFocus = (deps: Inputs) => {
	const fieldRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		fieldRef.current?.focus();
	}, deps);

	return fieldRef;
};
