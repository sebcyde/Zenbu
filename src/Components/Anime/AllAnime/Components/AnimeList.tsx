import { AnimeType, RawAnimeListType } from '../../../../Types/AnimeTypes';
import React, { useEffect } from 'react';
import { JoinPages } from '../../../../Functions/AnimeFunctions';

type Props = {
	AnimeList: AnimeType[];
};

const AnimeList = ({ AnimeList }: Props) => {
	const PullData = async () => {
		const FullList = await JoinPages();
	};

	// useEffect(() => {
	// 	PullData();
	// }, []);

	return (
		<div className="AnimeList">
			{AnimeList.sort((a, b) => (a.title < b.title ? -1 : 1)).map(
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
