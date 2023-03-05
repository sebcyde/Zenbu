import { AnimeListType, AnimeType } from '../../../Types/AnimeTypes';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import React, { useState } from 'react';
import LeftSideCard from './LeftSideCard';

type Props = {
	AnimeList: AnimeListType;
	Title: string;
};

const LeftSideBar = ({ AnimeList, Title }: Props) => {
	const [Extend, setExtend] = useState(false);

	return (
		<div className="LeftSideBarContainer">
			<h2 className="LeftSidebarTitle">{Title}</h2>
			{AnimeList.slice(0, Extend ? 10 : 5).map(
				(Anime: AnimeType, index: number) => {
					return <LeftSideCard Anime={Anime} Rank={index + 1} />;
				}
			)}

			<p className="ExtendArrow" onClick={() => setExtend(!Extend)}>
				{Extend ? (
					<KeyboardDoubleArrowUpIcon />
				) : (
					<KeyboardDoubleArrowDownIcon />
				)}
			</p>
		</div>
	);
};

export default LeftSideBar;
