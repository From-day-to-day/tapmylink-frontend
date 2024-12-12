import styles from './appBenefit.module.css';

interface Props {
  icon: string;
  title: string;
  text: string;
}

export const AppBenefit = ({ icon, title, text }: Props) => {
  return (
    <div>
      <h2 className={styles.title}>
        {icon} {title}
      </h2>
      <div>{text}</div>
    </div>
  );
};
