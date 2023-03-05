import React, { useEffect, useState } from 'react';
import { PullTopAnimeData } from '../../../Functions/AnimeFunctions';
import LeftSideBar from './LeftSideBar';

type Props = {};

const AnimeHome = (props: Props) => {
	const [AnimeListData, setAnimeListData] = useState([]);
	const [Loading, setLoading] = useState<boolean>(true);

	const Pulldata = async () => {
		const NewAnimeData = await PullTopAnimeData();
		setAnimeListData(NewAnimeData);
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
				<LeftSideBar AnimeList={AnimeListData} Title="Top Anime" />
				<div className="CentralSection">Center</div>
				<div className="RightSectionContainer">Right Section</div>
			</div>
		</>
	);
};

export default AnimeHome;
