import { Redirect, Route, Switch } from 'wouter-preact';
import styles from './app.module.css';
import { Error404Page, Header, HomePage, Footer } from '@/features';
import { ELanguage } from '@/shared/enums';
import { routes } from '@/shared/routes';
import './reset.css';

export const App = () => {
  return (
    <Switch>
      <Route path={routes.publicCard}>
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
              <div>cards</div>
            </Route>
            <Route path={routes.editCard()}>
              <div>edit card</div>
            </Route>
            <Route path={routes.createCard()}>
              <div>create card</div>
            </Route>
            <Route path={routes.tariffs()}>
              <div>tariffs</div>
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
