import { render } from 'preact';
import './index.css';
import { SWRConfig } from 'swr';
import { swrConfig } from './_configs';
import { App } from './App';
import { ErrorBoundary, LanguageProvider } from '@/features';

render(
  <LanguageProvider>
    <ErrorBoundary>
      <SWRConfig value={swrConfig}>
        <App />
      </SWRConfig>
    </ErrorBoundary>
  </LanguageProvider>,
  document.getElementById('app')!,
);
