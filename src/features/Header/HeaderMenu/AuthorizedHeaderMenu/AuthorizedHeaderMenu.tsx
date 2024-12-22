import { ExternalLink, InternalLink } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { AuthorizedComponentProps } from '@/shared/processes';
import { routes } from '@/shared/routes';
import { fetcher } from '@/shared/utils';

import { getActiveMenuLinkClassName } from './_utils';
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

	return (
		<>
			<li>
				<InternalLink
					className={getActiveMenuLinkClassName}
					href={routes.cards(language)}
					text={messages[language].myCardsMenuItem}
				/>
			</li>
			<li>
				<InternalLink
					className={getActiveMenuLinkClassName}
					href={routes.tariffs(language)}
					text={messages[language].plansMenuItem}
				/>
			</li>
			<li>
				<ExternalLink
					href="javascript:void(0)"
					onClick={onLogout}
					className={styles.logoutLink}
					text={messages[language].logoutMenuItem}
				/>
			</li>
		</>
	);
};
