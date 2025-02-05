import { useState } from 'preact/hooks';

import { COPIED_TEXT_VISIBILITY_TIMEOUT } from '@/shared/consts';
import { getPublicCardUrl } from '@/shared/utils';

export const useCopyCard = (cardName: string | undefined) => {
	const [isCopiedCard, setIsCopiedCard] = useState(false);

	const onCopyCard = async () => {
		if (!cardName) throw new Error('Could not copy card');

		navigator.clipboard
			.writeText(getPublicCardUrl(cardName))
			.then(() => {
				setIsCopiedCard(true);
			})
			.finally(() => {
				setTimeout(
					() => setIsCopiedCard(false),
					COPIED_TEXT_VISIBILITY_TIMEOUT,
				);
			});
	};

	return { isCopiedCard, onCopyCard };
};
