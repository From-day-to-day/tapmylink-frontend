import { useRef } from 'react';
import { CardTitle } from './CardTitle';

interface Props {
  title: string;
}

export const EditableCardTitle = ({ title }: Props) => {
  const cardTitleRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <CardTitle title={title} ref={cardTitleRef} isEditable />
    </div>
  );
};
