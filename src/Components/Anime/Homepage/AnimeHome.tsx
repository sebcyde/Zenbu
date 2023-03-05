import React, { useEffect, useState } from 'react';
import {
	PullAllAnimeData,
	PullTopAnimeData,
} from '../../../Functions/AnimeFunctions';
import CenterSection from './Center/CenterSection';
import LeftSideBar from './LeftSide/LeftSideBar';

type Props = {};

const AnimeHome = (props: Props) => {
	const [AnimeListData, setAnimeListData] = useState([]);
	const [AllAnime, setAllAnime] = useState([]);
	const [Loading, setLoading] = useState<boolean>(true);

	const Pulldata = async () => {
		const NewAnimeData = await PullTopAnimeData();
		// const AllAnimeData = await PullAllAnimeData();
		setAnimeListData(NewAnimeData);
		// setAllAnime(AllAnimeData);
		setLoading(false);
	};

	// useEffect(() => {
	// 	Pulldata();
	// }, []);

	return Loading ? (
		<div>
			<h2>Loading</h2>
		</div>
	) : (
		<>
			<div className="AnimeHomePage">
				<LeftSideBar AnimeList={AnimeListData} />
				<CenterSection AnimeList={AnimeListData} />
				<div className="RightSectionContainer">Right Section</div>
			</div>
		</>
	);
};

export default AnimeHome;
