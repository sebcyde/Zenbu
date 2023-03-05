import React from 'react';
import { AnimeType } from '../../../../Types/AnimeTypes';

type Props = {
	Anime: AnimeType;
};

const Spotlight = ({ Anime }: Props) => {
	return <div className="SpotlightContainer">Spotlight</div>;
};

export default Spotlight;
