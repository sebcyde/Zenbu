import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PullAnimeGenres } from '../../../../Functions/AnimeFunctions';
import {
	AnimeGenreFilter,
	SetGenreFilter,
} from '../../../../Store/Slices/AnimeGenreFilterSlice';
import { AnimeGenre } from '../../../../Types/AnimeTypes';

type Props = {};

const GenreFilter = (props: Props) => {
	const [AllGenres, setAllGenres] = useState<AnimeGenre[]>([]);
	const [Loading, setLoading] = useState<boolean>(true);
	const CurrentGenre = useSelector(AnimeGenreFilter);
	const dispatch = useDispatch();

	const UpdateGenreFilter = async (Genre: string) => {
		dispatch(SetGenreFilter(Genre));
	};

	const PullData = async () => {
		const Genres = await PullAnimeGenres();
		console.log('Genres:', Genres);
		setAllGenres(Genres);
		setLoading(false);
	};

	useEffect(() => {
		PullData();
	}, []);

	useEffect(() => {
		console.log('Current Genre:', CurrentGenre);
	}, [CurrentGenre]);

	return (
		<div className="GenreFilter">
			{Loading ? (
				<h2>Loading...</h2>
			) : (
				AllGenres.map((Genre) => {
					return (
						<p onClick={() => UpdateGenreFilter(Genre.name)}>{Genre.name}</p>
					);
				})
			)}
		</div>
	);
};

export default GenreFilter;
