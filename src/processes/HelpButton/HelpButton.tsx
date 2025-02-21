import { useState } from 'preact/hooks';
import { FaQuestion } from 'react-icons/fa6';

import { Modal } from '@/processes';
import { Button } from '@/shared/components';

interface Props {
	modalDescription: string;
}

export const HelpButton = ({ modalDescription }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpenModalClick = () => setIsOpen(true);
	const onCloseModalClick = () => setIsOpen(false);

	return (
		<>
			<Button
				buttonSize="small"
				minSpaces
				onClick={onOpenModalClick}
				type="button"
			>
				<FaQuestion />
			</Button>
			<Modal open={isOpen} onClose={onCloseModalClick} centerPosition="xy">
				{modalDescription}
			</Modal>
		</>
	);
};
