import cc from 'classcat';
import { FaCheck } from 'react-icons/fa6';
import useSWRMutation from 'swr/mutation';

import { HelpButton } from '@/processes';
import { CARDS_API_PATH } from '@/shared/consts';
import { ECardTheme } from '@/shared/enums';
import { useLanguage } from '@/shared/hooks';
import { ErrorResponse, Card, Tariff } from '@/shared/models';
import { fetcher } from '@/shared/utils';

import { CARD_COLORS } from './_consts';
import { CardFormData } from './_models';
import messages from './messages';

import styles from './editCardTheme.module.css';

interface Props {
	id: number;
	theme: ECardTheme | null;
	cacheDataKey: string;
	tariffData?: Tariff;
}

export const EditCardTheme = ({
	id,
	theme: currentTheme,
	cacheDataKey,
	tariffData,
}: Props) => {
	const { language } = useLanguage();

	const { isMutating, trigger } = useSWRMutation<
		Card,
		ErrorResponse,
		string,
		CardFormData
	>(
		cacheDataKey,
		async (_url, { arg }) =>
			await fetcher(`${CARDS_API_PATH}/${id}/theme`, 'PATCH', arg),
		{
			populateCache: true,
		},
	);

	const onChangeTheme = (theme: ECardTheme | null) => {
		trigger({ theme }, { revalidate: false });
	};

	return (
		<div className={styles.themes}>
			<div className={styles.themes__list}>
				{CARD_COLORS.map((theme) => {
					const isCurrentTheme = theme === currentTheme;

					return (
						<div
							key={theme}
							className={cc([
								styles.theme,
								(isMutating || !tariffData?.hasCardPalette) &&
									styles.theme_disabled,
								isCurrentTheme && styles.theme_active,
							])}
							style={{
								background:
									theme !== null
										? `var(--card-${ECardTheme[theme]}-theme)`
										: undefined,
							}}
							onClick={
								tariffData?.hasCardPalette && !isCurrentTheme
									? () => onChangeTheme(theme)
									: undefined
							}
						>
							{isCurrentTheme && <FaCheck />}
						</div>
					);
				})}
			</div>
			{!tariffData?.hasCardPalette && (
				<div>
					<HelpButton modalDescription={messages[language].themePremiumHint} />
				</div>
			)}
		</div>
	);
};
