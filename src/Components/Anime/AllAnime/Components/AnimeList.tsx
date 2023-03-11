import { AnimeType, RawAnimeListType } from '../../../../Types/AnimeTypes';
import React, { useEffect, useState } from 'react';
import {
	PullAllAnimeData,
	PullAnimeDataByLetter,
} from '../../../../Functions/AnimeFunctions';
import { LetterFilter } from '../../../../Store/Slices/AnimeLetterFilterSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const AnimeList = () => {
	const [AllAnime, setAllAnime] = useState<AnimeType[]>([]);
	const [Loading, setLoading] = useState<boolean>(true);
	const CurrentLetter = useSelector(LetterFilter);

	const PullData = async () => {
		const FullList = await PullAllAnimeData();
		setAllAnime(FullList);
		setLoading(false);
	};

	const UpdateData = async () => {
		if (CurrentLetter.Letter) {
			setLoading(true);
			const FullList = await PullAnimeDataByLetter(CurrentLetter.Letter);
			setAllAnime(FullList);
			setLoading(false);
		}
	};

	useEffect(() => {
		PullData();
	}, []);

	useEffect(() => {
		UpdateData();
	}, [CurrentLetter]);

	return (
		<div className="AnimeList">
			{!Loading &&
				AllAnime.sort((a, b) => (a.title < b.title ? -1 : 1)).map(
					(Anime: AnimeType) => {
						return (
							<div className="AnimeContainer">
								<div className="ImageContainer">
									<img
										src={
											Anime.images.webp.large_image_url
												? Anime.images.webp.large_image_url
												: Anime.images.jpg.large_image_url
										}
									/>
								</div>
								<div className="AnimeDetailsContainer">
									<p className="AnimeTitle">{Anime.title}</p>
								</div>
							</div>
						);
					}
				)}
		</div>
	);
};

export default AnimeList;
