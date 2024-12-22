import styles from '../autorizedHeaderMenu.module.css';

export const getActiveMenuLinkClassName = (isActive: boolean) =>
	isActive ? styles.activeLink : '';
