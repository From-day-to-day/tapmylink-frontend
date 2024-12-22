import { Button } from '@/shared/components';

import { CardLink } from './CardLink';

interface Props {
	url: string;
	title?: string;
}

export const EditableCardLink = ({ title, url }: Props) => {
	return (
		<div>
			<CardLink title={title} url={url}>
				<Button buttonSize="small">Редактировать</Button>
			</CardLink>
		</div>
	);
};
