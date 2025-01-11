import './reset.css';

import { Redirect, Route, Switch } from 'wouter-preact';

import { Footer, Header } from '@/features';
import { HomePage, CardsPage, TariffsPage, Error404Page } from '@/pages';
import { AuthWrapper } from '@/processes';
import { ELanguage } from '@/shared/enums';
import { routes } from '@/shared/routes';

import styles from './app.module.css';

export const App = () => {
	return (
		<Switch>
			<Route path={routes.publicCard()}>
				<div>public card</div>
			</Route>
			<Route>
				<div className={styles.app}>
					<header className={styles.app__header}>
						<Header />
					</header>
					<Switch>
						<Route path="/">
							<Redirect to={routes.home(ELanguage.en)} replace />
						</Route>
						<Route path={routes.home()} component={HomePage} />
						<Route path={routes.cards()}>
							<AuthWrapper AuthorizedComponent={CardsPage} needTariffData />
						</Route>
						<Route path={routes.editCard()}>
							<div>edit card</div>
						</Route>
						<Route path={routes.tariffs()}>
							<AuthWrapper AuthorizedComponent={TariffsPage} />
						</Route>
						<Route component={Error404Page} />
					</Switch>
					<header className={styles.app__footer}>
						<Footer />
					</header>
				</div>
			</Route>
		</Switch>
	);
};
