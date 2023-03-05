import { AnimeListType, AnimeType } from '../../../Types/AnimeTypes';
import React from 'react';
import LeftSideCard from './LeftSideCard';

type Props = {
	AnimeList: AnimeListType;
	Title: string;
};

const LeftSideBar = ({ AnimeList, Title }: Props) => {
	return (
		<div className="LeftSideBarContainer">
			<h2 className="LeftSidebarTitle">{Title}</h2>
			{AnimeList.slice(0, 10).map((Anime: AnimeType, index: number) => {
				return <LeftSideCard Anime={Anime} Rank={index + 1} />;
			})}
		</div>
	);
};

export default LeftSideBar;
