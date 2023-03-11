import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import {
	LetterFilter,
	SetLetterFilter,
} from '../../../../Store/Slices/AnimeLetterFilterSlice';

type Props = {};

const AZFilter = (props: Props) => {
	const CurrentLetter = useSelector(LetterFilter);
	const dispatch = useDispatch();

	const ChangeFilterLetter = (NewLetter: string) => {
		dispatch(SetLetterFilter(NewLetter));
	};

	useEffect(() => {
		console.log('Current Letter:', CurrentLetter);
	}, [CurrentLetter]);

	return (
		<div className="AZFilter">
			<h2 className="AZFilterTitle">Choose a letter</h2>
			<div className="LetterContainer">
				<p onClick={() => ChangeFilterLetter('A')}>A</p>
				<p onClick={() => ChangeFilterLetter('B')}>B</p>
				<p onClick={() => ChangeFilterLetter('C')}>C</p>
				<p onClick={() => ChangeFilterLetter('D')}>D</p>
				<p onClick={() => ChangeFilterLetter('E')}>E</p>
				<p onClick={() => ChangeFilterLetter('F')}>F</p>
				<p onClick={() => ChangeFilterLetter('G')}>G</p>
				<p onClick={() => ChangeFilterLetter('H')}>H</p>
				<p onClick={() => ChangeFilterLetter('I')}>I</p>
				<p onClick={() => ChangeFilterLetter('J')}>J</p>
				<p onClick={() => ChangeFilterLetter('K')}>K</p>
				<p onClick={() => ChangeFilterLetter('L')}>L</p>
				<p onClick={() => ChangeFilterLetter('M')}>M</p>
				<p onClick={() => ChangeFilterLetter('N')}>N</p>
				<p onClick={() => ChangeFilterLetter('O')}>O</p>
				<p onClick={() => ChangeFilterLetter('P')}>P</p>
				<p onClick={() => ChangeFilterLetter('Q')}>Q</p>
				<p onClick={() => ChangeFilterLetter('R')}>R</p>
				<p onClick={() => ChangeFilterLetter('S')}>S</p>
				<p onClick={() => ChangeFilterLetter('T')}>T</p>
				<p onClick={() => ChangeFilterLetter('U')}>U</p>
				<p onClick={() => ChangeFilterLetter('V')}>V</p>
				<p onClick={() => ChangeFilterLetter('W')}>W</p>
				<p onClick={() => ChangeFilterLetter('X')}>X</p>
				<p onClick={() => ChangeFilterLetter('Y')}>Y</p>
				<p onClick={() => ChangeFilterLetter('Z')}>Z</p>
			</div>
		</div>
	);
};

export default AZFilter;
