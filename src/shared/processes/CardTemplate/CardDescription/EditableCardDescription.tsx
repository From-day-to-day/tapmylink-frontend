import { useRef } from 'react';
import { CardDescription } from './CardDescription';

interface Props {
  description?: string;
}

export const EditableCardDescription = ({ description }: Props) => {
  const cardDescriptionRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <CardDescription description={description} ref={cardDescriptionRef} isEditable />
    </div>
  );
};
