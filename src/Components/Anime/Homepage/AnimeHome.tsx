import React, { useEffect, useState } from 'react';
import {
	PullAllAnimeData,
	PullTopAnimeData,
} from '../../../Functions/AnimeFunctions';
import CenterSection from './Center/CenterSection';
import LeftSideBar from './LeftSide/LeftSideBar';
import CharacterOfTheDay from './RightSide/CharacterOfTheDay';
import RightSection from './RightSide/RightSection';

type Props = {};

const AnimeHome = (props: Props) => {
	const [TopAnimeListData, setTopAnimeListData] = useState([]);
	const [AllAnime, setAllAnime] = useState([]);
	const [Loading, setLoading] = useState<boolean>(true);

	const Pulldata = async () => {
		const TopAnimeData = await PullTopAnimeData();

		setTopAnimeListData(TopAnimeData);

		setLoading(false);
	};

	useEffect(() => {
		Pulldata();
	}, []);

	return Loading ? (
		<div>
			<h2>Loading</h2>
		</div>
	) : (
		<>
			<div className="AnimeHomePage">
				<LeftSideBar AnimeList={TopAnimeListData} />
				<CenterSection AnimeList={TopAnimeListData} />
				<RightSection />
			</div>
		</>
	);
};

export default AnimeHome;
