import { useState } from 'preact/hooks';
import { FaRegCopy, FaCheck } from 'react-icons/fa6';

import { Button } from '@/shared/components';
import { routes } from '@/shared/routes';

import { COPIED_TEXT_VISIBILITY_TIMEOUT } from './_consts';

import styles from './copyCardBlock.module.css';

interface Props {
	cardName: string;
}

export const CopyCardBlock = ({ cardName }: Props) => {
	const [isCopiedCard, setIsCopiedCard] = useState(false);

	const carUrl = `${location.origin}${routes.publicCard(cardName)}`;

	const onCopyCard = async () => {
		navigator.clipboard
			.writeText(carUrl)
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

	return (
		<div className={styles.copyCardBlock}>
			<span className={styles.url}>{carUrl}</span>
			<Button onClick={onCopyCard} disabled={isCopiedCard} minSpaces>
				{isCopiedCard ? <FaCheck /> : <FaRegCopy />}
			</Button>
		</div>
	);
};
