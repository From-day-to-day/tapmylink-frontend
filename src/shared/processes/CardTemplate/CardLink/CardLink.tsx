import { PropsWithChildren } from 'preact/compat';
import { FaLink } from 'react-icons/fa6';
import { getDomainAndZone } from './_utils';
import styles from './cardLink.module.css';
import { iconMap } from './consts';

interface Props {
  url: string;
  title?: string;
}

export const CardLink = ({ url, title, children }: PropsWithChildren<Props>) => {
  return (
    <div className={styles.container}>
      <a href={url} title={url} target="_blank" className={styles.link} rel="noreferrer">
        {iconMap[getDomainAndZone(url)] || <FaLink />}
        {title || new URL(url).host}
      </a>
      {children && <div>{children}</div>}
    </div>
  );
};
