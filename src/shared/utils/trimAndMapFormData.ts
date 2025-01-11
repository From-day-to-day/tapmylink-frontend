export const trimAndMapFormData = <T extends Record<string, string>>(
	formElement: HTMLFormElement,
): T => {
	const trimmedFormData: Record<string, string> = {};

	for (const [key, value] of new FormData(formElement)) {
		const trimmedValue = typeof value === 'string' ? value.trim() : '';
		trimmedFormData[key] = trimmedValue;

		const input = formElement.elements.namedItem(key) as HTMLInputElement;
		if (input) {
			input.value = trimmedValue;
		}
	}

	return trimmedFormData as T;
};
