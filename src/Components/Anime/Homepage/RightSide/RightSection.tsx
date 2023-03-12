import React from 'react';
import CharacterOfTheDay from './CharacterOfTheDay';

type Props = {};

const RightSection = (props: Props) => {
	return (
		<div className="RightSectionContainer">
      <CharacterOfTheDay />
      
		</div>
	);
};

export default RightSection;
