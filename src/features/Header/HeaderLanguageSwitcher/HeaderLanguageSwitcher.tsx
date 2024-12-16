import { JSX } from 'preact';
import { useLocation, useRoute } from 'wouter-preact';

import { LANGUAGE_ROUTE_PATTERN } from '@/shared/consts';
import { ELanguage } from '@/shared/enums';
import { useLanguage } from '@/shared/hooks';

import { switchLanguageInPath } from './_utils/switchLanguageInPath';

import styles from './headerLanguageSwitcher.module.css';

export const HeaderLanguageSwitcher = () => {
	const [isPageFound] = useRoute(`/${LANGUAGE_ROUTE_PATTERN}/*?`);
	const [location, setLocation] = useLocation();
	const { language: currentLanguage, setLanguage } = useLanguage();

	const onLanguageChange = (
		event: JSX.TargetedEvent<HTMLSelectElement, Event>,
	) => {
		const selectedLanguage = (event.target as HTMLSelectElement)
			.value as ELanguage;

		if (isPageFound) {
			setLocation(switchLanguageInPath(location, selectedLanguage));
		} else {
			setLanguage(selectedLanguage);
		}
	};

	return (
		<div className={styles.menu}>
			<select
				className={styles.menu__select}
				value={currentLanguage}
				onChange={onLanguageChange}
			>
				{(Object.keys(ELanguage) as ELanguage[]).map((language) => {
					return (
						<option key={language} value={language}>
							{language.toUpperCase()}
						</option>
					);
				})}
			</select>
		</div>
	);
};
