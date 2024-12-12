import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'wouter-preact';
import styles from './createCardLink.module.css';

interface Props {
  title: string;
  href: string;
}

export const CreateCardLink = ({ title, href }: Props) => {
  const Wrapper = href.startsWith('http') ? 'a' : Link;

  return (
    <Wrapper href={href} className={styles.link}>
      {title}
      <span className={styles.icon}>
        <FaArrowRightLong />
      </span>
    </Wrapper>
  );
};
