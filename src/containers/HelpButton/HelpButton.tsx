import { useState } from 'preact/hooks';
import { FaQuestion } from 'react-icons/fa6';

import { Modal } from '@/processes';
import { Button } from '@/shared/components';

interface Props {
	title: string;
}

export const HelpButton = ({ title }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpenModalClick = () => setIsOpen(true);
	const onCloseModalClick = () => setIsOpen(false);

	return (
		<>
			<Button buttonSize="small" minSpaces onClick={onOpenModalClick}>
				<FaQuestion />
			</Button>
			<Modal open={isOpen} onClose={onCloseModalClick} centerPosition="xy">
				{title}
			</Modal>
		</>
	);
};
