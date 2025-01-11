import { ForwardedRef, forwardRef } from 'preact/compat';

interface Props {
	description?: string;
	isEditable?: boolean;
}

export const CardDescription = forwardRef(
	({ description, isEditable }: Props, ref: ForwardedRef<HTMLDivElement>) => {
		return (
			<div contentEditable={isEditable} ref={ref}>
				{description}
			</div>
		);
	},
);
