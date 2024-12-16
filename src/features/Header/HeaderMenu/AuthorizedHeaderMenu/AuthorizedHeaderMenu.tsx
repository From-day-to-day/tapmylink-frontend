import { Link } from 'wouter-preact';

import { useLanguage } from '@/shared/hooks';
import { AuthorizedComponentProps } from '@/shared/processes';
import { routes } from '@/shared/routes';
import { fetcher } from '@/shared/utils';

import messages from './messages';

import styles from './autorizedHeaderMenu.module.css';

export const AuthorizedHeaderMenu = ({
	userMutate,
}: AuthorizedComponentProps) => {
	const { language } = useLanguage();

	const onLogout = () => {
		fetcher(
			'logout',
			'GET',
			undefined,
			`${import.meta.env.VITE_BACKEND_URL}/`,
		).then(userMutate);
	};

	const getActiveMenuLinkClassName = (isActive: boolean) =>
		isActive ? styles.activeLink : '';

	return (
		<>
			<li>
				<Link
					className={getActiveMenuLinkClassName}
					to={routes.cards(language)}
				>
					{messages[language].myCardsMenuItem}
				</Link>
			</li>
			<li>
				<Link
					className={getActiveMenuLinkClassName}
					to={routes.tariffs(language)}
				>
					{messages[language].plansMenuItem}
				</Link>
			</li>
			<li>
				<a
					href="javascript:void(0)"
					onClick={onLogout}
					className={styles.logoutLink}
				>
					{messages[language].logoutMenuItem}
				</a>
			</li>
		</>
	);
};
