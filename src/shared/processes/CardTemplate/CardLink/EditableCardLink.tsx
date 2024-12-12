import { CardLink } from './CardLink';
import { Button } from '@/shared/components';

interface Props {
  url: string;
  title?: string;
}

export const EditableCardLink = ({ title, url }: Props) => {
  return (
    <div>
      <CardLink title={title} url={url}>
        <Button variant="outlined">Редактировать</Button>
      </CardLink>
    </div>
  );
};
