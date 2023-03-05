import { PullAllAnimeData } from '../../../Functions/AnimeFunctions';
import AnimeList from './Components/AnimeList';
import AZFilter from './Components/AZFilter';
import { useEffect, useState } from 'react';
import GenreFilter from './Components/GenreFilter';
import { AnimeType } from '../../../Types/AnimeTypes';

type Props = {};

const AllAnime = (props: Props) => {
	const [AllAnime, setAllAnime] = useState<AnimeType[]>([]);
	const [Loading, setLoading] = useState<boolean>(true);

	const Pulldata = async () => {
		const AllAnimeData = await PullAllAnimeData();
		setAllAnime(AllAnimeData);
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
			<div className="AllAnimePage">
				<div className="LeftSection">
					<AZFilter />
					<AnimeList AnimeList={AllAnime} />
				</div>
				<div className="RightSection">
					<GenreFilter />
				</div>
			</div>
		</>
	);
};

export default AllAnime;
