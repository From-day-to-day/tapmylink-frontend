import { FaCheck, FaRegCopy } from 'react-icons/fa6';

import { Button } from '@/shared/components';
import { useCopyCard } from '@/shared/hooks';
import { getPublicCardUrl } from '@/shared/utils';

import styles from './copyCardBlock.module.css';

interface Props {
	cardName: string;
}

export const CopyCardBlock = ({ cardName }: Props) => {
	const { isCopiedCard, onCopyCard } = useCopyCard(cardName);

	return (
		<div className={styles.copyCardBlock}>
			<span className={styles.url}>{getPublicCardUrl(cardName)}</span>
			<Button
				onClick={onCopyCard}
				disabled={isCopiedCard}
				buttonSize="small"
				minSpaces
			>
				{isCopiedCard ? <FaCheck /> : <FaRegCopy />}
			</Button>
		</div>
	);
};
