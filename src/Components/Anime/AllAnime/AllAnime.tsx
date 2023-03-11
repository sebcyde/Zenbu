import { AnimeGenreFilter } from '../../../Store/Slices/AnimeGenreFilterSlice';
import { LetterFilter } from '../../../Store/Slices/AnimeLetterFilterSlice';
import AnimeList from './Components/AnimeList';
import AZFilter from './Components/AZFilter';
import GenreFilter from './Components/GenreFilter';
import { useSelector } from 'react-redux';

type Props = {};

const AllAnime = (props: Props) => {
	const CurrentGenre = useSelector(AnimeGenreFilter);
	const CurrentLetter = useSelector(LetterFilter);

	const Header = () => {
		if (!CurrentGenre.Genre && !CurrentLetter.Letter)
			return <h2 className="Header"></h2>;

		if (!CurrentGenre.Genre)
			return (
				<h2 className="Header">{`Currently displaying all anime starting with '${CurrentLetter.Letter}'`}</h2>
			);

		return (
			<h2 className="Header">{`Currently displaying ${CurrentGenre.Genre} anime starting with '${CurrentLetter.Letter}'`}</h2>
		);
	};

	return (
		<div className="AllAnimePage">
			<div className="LeftSection">
				<AZFilter />
				<Header />
				<AnimeList />
			</div>
			<div className="RightSection">
				<GenreFilter />
			</div>
		</div>
	);
};

export default AllAnime;
