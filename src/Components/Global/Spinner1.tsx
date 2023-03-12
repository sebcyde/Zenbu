import React, { useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

type Props = {};

const Spinner1 = () => {
	return (
		<FadeLoader
			color={'#457b9d'}
			height={20}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

export default Spinner1;
