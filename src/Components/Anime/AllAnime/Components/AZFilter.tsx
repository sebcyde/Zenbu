import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import {
	LetterFilter,
	SetLetterFilter,
} from '../../../../Store/Slices/AnimeLetterFilterSlice';
import { SetGenreFilter } from '../../../../Store/Slices/AnimeGenreFilterSlice';

type Props = {};

const AZFilter = (props: Props) => {
	const CurrentLetter = useSelector(LetterFilter);
	const dispatch = useDispatch();

	const Alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	const ChangeFilterLetter = (NewLetter: string) => {
		dispatch(SetLetterFilter(NewLetter));
		dispatch(SetGenreFilter(null));
	};

	return (
		<div className="AZFilter">
			<h2 className="AZFilterTitle">Choose a letter</h2>
			<div className="LetterContainer">
				{Alphabet.map((AlphaLetter) => {
					return (
						<p
							className={CurrentLetter.Letter == AlphaLetter ? 'Active' : ''}
							onClick={() => ChangeFilterLetter(AlphaLetter)}
						>
							{AlphaLetter}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default AZFilter;
