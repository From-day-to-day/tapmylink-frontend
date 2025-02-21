import { FaTrash, FaPen, FaArrowDown, FaArrowUp } from 'react-icons/fa6';

import { Button } from '@/shared/components';
import { CardLink } from '@/shared/models';

import { CardLinkItem } from './CardLinkItem';

interface Props {
	onEditLink: () => void;
	onDeleteLink: () => void;
	onMoveUpCardLink: () => void;
	onMoveDownCardLink: () => void;
	link: CardLink;
	isFirst: boolean;
	isLast: boolean;
}

export const EditableCardLinkItem = ({
	link,
	onEditLink,
	onDeleteLink,
	onMoveUpCardLink,
	onMoveDownCardLink,
	isFirst,
	isLast,
}: Props) => {
	return (
		<CardLinkItem
			link={link}
			preComponent={
				<Button buttonSize="small" onClick={onEditLink}>
					<FaPen />
				</Button>
			}
			postComponent={
				<>
					{!isLast && (
						<Button buttonSize="small" onClick={onMoveDownCardLink}>
							<FaArrowDown />
						</Button>
					)}
					{!isFirst && (
						<Button buttonSize="small" onClick={onMoveUpCardLink}>
							<FaArrowUp />
						</Button>
					)}
					<Button buttonSize="small" onClick={onDeleteLink}>
						<FaTrash />
					</Button>
				</>
			}
		/>
	);
};
