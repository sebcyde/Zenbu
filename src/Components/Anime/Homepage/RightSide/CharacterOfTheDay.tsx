import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CharacterType } from '../../../../Types/AnimeTypes';

type Props = {};

const CharacterOfTheDay = (props: Props) => {
	const [Character, setCharacter] = useState<CharacterType | null>(null);

	const PullData = async () => {
		const Character = await axios.get(
			'https://api.jikan.moe/v4/random/characters'
		);
		console.log('Character:', Character.data.data);
		setCharacter(Character.data.data);
	};

	useEffect(() => {
		PullData();
	}, []);

	return (
		<div className="RightSideBoxContainer">
			<h2 className="RightSidebarTitle">Character Of The Day</h2>
			<div className="CharacterImageContainer">
				<img src={Character?.images.jpg.image_url} className='CharacterImage'/>
			</div>
			<h3 className="CharacterName">{Character?.name}</h3>
			<p className="CharacterAbout">{Character?.about}</p>
		</div>
	);
};

export default CharacterOfTheDay;
