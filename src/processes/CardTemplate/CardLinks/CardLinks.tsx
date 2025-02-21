import cc from 'classcat';
import { useState } from 'preact/hooks';
import { Fragment } from 'preact/jsx-runtime';
import { FaPlus } from 'react-icons/fa6';

import { HelpButton } from '@/processes';
import { Button } from '@/shared/components';
import { useLanguage } from '@/shared/hooks';
import { CardLink, Tariff } from '@/shared/models';

import { useDeleteCardLink, useMoveCardLink } from './_hooks';
import { CardControlLinkModal } from './CardControlLinkModal';
import { EditableCardLinkItem, CardLinkItem } from './CardLinkItem';
import messages from './messages';

import styles from './cardLinks.module.css';

interface Props {
	cardId: number;
	tariffData?: Tariff;
	links?: CardLink[];
	cacheDataKey?: string;
}

export const CardLinks = ({
	cardId,
	tariffData,
	links,
	cacheDataKey,
}: Props) => {
	const { language } = useLanguage();

	const [currentCardLink, setCurrentCardLink] = useState<CardLink | null>();

	const { onDeleteLink, isDeletingCardLink } = useDeleteCardLink(cacheDataKey);
	const { triggerMoveCard, isMovingCardLink } = useMoveCardLink(cacheDataKey);

	const onEditLink = (currentLink: CardLink) => {
		setCurrentCardLink(currentLink);
	};

	const isEditable = Boolean(cacheDataKey);
	const isLinksLimit = tariffData?.linksLimit === links?.length;

	return (
		<div className={styles.container}>
			{Boolean(links?.length) && (
				<div
					className={cc([
						styles.links,
						isEditable && styles.links_list,
						(isDeletingCardLink || isMovingCardLink) && styles.links_disabled,
					])}
				>
					{links?.map((link, index, array) => (
						<Fragment key={link.id}>
							{isEditable ? (
								<EditableCardLinkItem
									link={link}
									isFirst={index === 0}
									isLast={index === array.length - 1}
									onEditLink={() => onEditLink(link)}
									onDeleteLink={() => onDeleteLink(link)}
									onMoveUpCardLink={() =>
										triggerMoveCard([link.cardId, link.id, links[index - 1].id])
									}
									onMoveDownCardLink={() =>
										triggerMoveCard([link.cardId, link.id, links[index + 1].id])
									}
								/>
							) : (
								<CardLinkItem link={link} />
							)}
						</Fragment>
					))}
				</div>
			)}
			{isEditable && tariffData && (
				<div className={styles.submitFormButtonWrapper}>
					<Button
						PreIcon={FaPlus}
						buttonSize="small"
						onClick={() => setCurrentCardLink(null)}
						disabled={isLinksLimit}
					>
						{messages[language].addCardLinkButtonText}
					</Button>
					{isLinksLimit && tariffData && (
						<HelpButton
							modalDescription={messages[language].linksLimitMessage(
								tariffData.linksLimit,
							)}
						/>
					)}
				</div>
			)}
			{isEditable && cacheDataKey && (
				<CardControlLinkModal
					cardId={cardId}
					currentCardLink={currentCardLink}
					setCurrentCardLink={setCurrentCardLink}
					cacheDataKey={cacheDataKey}
				/>
			)}
		</div>
	);
};
