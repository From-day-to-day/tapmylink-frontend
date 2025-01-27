import { useEffect } from 'preact/hooks';
import { useLocation } from 'wouter-preact';

export const ScrollRestoration = () => {
	const [pathname] = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};
