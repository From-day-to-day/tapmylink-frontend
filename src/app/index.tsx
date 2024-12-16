import { render } from 'preact';
import { SWRConfig } from 'swr';

import { ErrorBoundary, LanguageProvider } from '@/features';

import { swrConfig } from './_configs';
import { App } from './App';

import './index.css';

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
