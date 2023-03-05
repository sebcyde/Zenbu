import { Rating } from '@mui/material';
import React from 'react';
import { AnimeType } from '../../../../Types/AnimeTypes';

type Props = {
	Anime: AnimeType;
	Rank: number | null;
};

const LeftSideCard = ({ Anime, Rank }: Props) => {
	return (
		<div className="LeftSidebarCardContainer">
			{Rank && <h2 className="AnimeRank">{Rank}.</h2>}
			<img
				src={
					Anime.images.webp
						? Anime.images.webp.large_image_url
						: Anime.images.jpg.large_image_url
				}
				className="AnimeImage"
			/>
			<div className="CardDetailsContainer">
				<p className="AnimeTitle">{Anime.title}</p>
				<p className="AnimeEpisodes">
					{Anime.type}, {Anime.episodes} Eps
				</p>
				<Rating
					name="half-rating-read"
					defaultValue={Anime.score / 2}
					precision={0.1}
					readOnly
					size="small"
				/>
			</div>
		</div>
	);
};

export default LeftSideCard;
