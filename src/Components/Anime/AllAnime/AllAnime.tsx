import AnimeList from './Components/AnimeList';
import AZFilter from './Components/AZFilter';
import GenreFilter from './Components/GenreFilter';

type Props = {};

const AllAnime = (props: Props) => {
	return (
		<div className="AllAnimePage">
			<div className="LeftSection">
				<AZFilter />
				<AnimeList />
			</div>
			<div className="RightSection">
				<GenreFilter />
			</div>
		</div>
	);
};

export default AllAnime;
