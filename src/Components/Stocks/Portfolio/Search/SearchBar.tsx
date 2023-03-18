import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

type ResultObject = {
	description: string;
	displaySymbol: string;
	symbol: string;
	type: string;
};

const SearchBar = () => {
	const [SearchResults, setSearchResults] = useState<ResultObject[]>();
	const [Searching, setSearching] = useState<boolean>(false);
	const SearchBarRef = useRef<HTMLInputElement>(null);

	const Search = async (SearchTerm: string) => {
		try {
			let Res = await axios.get(
				`https://finnhub.io/api/v1/search?q=${SearchTerm.toLowerCase()}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
			);

			console.log(Res.data);
			setSearchResults(Res.data.result.slice(0, 5));
		} catch (error: unknown) {
			console.log('Search Error:', error);
		}
	};

	const ResultElement = (ResultData: ResultObject, Key: string) => {
		return (
			<div className="ResultElementContainer" key={Key}>
				{ResultData.displaySymbol}, {ResultData.description}
			</div>
		);
	};

	const CallSearch = () => {
		if (SearchBarRef.current) {
			setSearching(true);
			Search(SearchBarRef.current.value);
		}
	};

	return (
		<div>
			<input className="SearchBar" ref={SearchBarRef} onChange={CallSearch} />

			{Searching ? (
				<>
					{SearchResults &&
						SearchResults.sort((a, b) =>
							a.displaySymbol < b.displaySymbol ? -1 : 1
						).map((Result) =>
							ResultElement(Result, Result.displaySymbol + Result.description)
						)}
				</>
			) : (
				<h2>Search Something</h2>
			)}
		</div>
	);
};

export default SearchBar;
