interface Props {
  message: string;
}

export const Error = ({ message }: Props) => {
  return <div>🛑 {message}</div>;
};
