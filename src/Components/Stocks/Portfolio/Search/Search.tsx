import { useDebouncedCallback } from 'use-debounce';
import React, { useRef, useState } from 'react';
import axios from 'axios';

type ResultObject = {
	description: string;
	displaySymbol: string;
	symbol: string;
	type: string;
};

type NewsObject = {
	category: string;
	datetime: number;
	headline: string;
	id: number;
	image: string;
	related: string;
	source: string;
	summary: string;
	url: string;
};

type Company = {
	country: string;
	currency: string;
	estimateCurrency: string;
	exchange: string;
	finnhubIndustry: string;
	ipo: string;
	logo: string;
	marketCapitalization: number;
	name: string;
	phone: string;
	shareOutstanding: number;
	ticker: string;
	weburl: string;
};

const Search = () => {
	const [SearchResults, setSearchResults] = useState<ResultObject[]>();
	const [CompanyDetails, setCompanyDetails] = useState<Company>();
	const [CurrentTicker, setCurrentTicker] = useState<string>('');
	const [Searching, setSearching] = useState<boolean>(false);
	const [NewsItems, setNewsItems] = useState<NewsObject[]>();
	const SearchBarRef = useRef<HTMLInputElement>(null);
	const debounced = useDebouncedCallback((value) => {
		Search(value);
	}, 300);

	const Search = async (SearchTerm: string) => {
		try {
			let Res = await axios.get(
				`https://finnhub.io/api/v1/search?q=${SearchTerm.toLowerCase()}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
			);

			setSearchResults(Res.data.result.slice(0, 10));
		} catch (error: unknown) {
			console.log('Search Error:', error);
		}
	};

	const PullNews = async (Ticker: string, Company: string) => {
		setCurrentTicker(Company);

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();

		const Today = `${yyyy}-${mm}-${dd}`;
		const OneYearAgo = `${yyyy - 1}-${mm}-${dd}`;

		try {
			let StockRes = await axios.get(
				`https://finnhub.io/api/v1/stock/profile2?symbol=${Ticker.toLowerCase()}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
			);

			let Res = await axios.get(
				`https://finnhub.io/api/v1/company-news?symbol=${Ticker.toLowerCase()}&from=${OneYearAgo}&to=${Today}&token=ce8c86iad3i1ljtnrrggce8c86iad3i1ljtnrrh0`
			);

			setCompanyDetails(StockRes.data);
			setNewsItems(Res.data);
		} catch (error: unknown) {
			console.log('Search Error:', error);
		}
	};

	const CallSearch = () => {
		if (SearchBarRef.current) {
			setSearching(true);
			debounced(SearchBarRef.current.value);
		}
	};

	const ResultElement = (ResultData: ResultObject, Key: string) => {
		return (
			<span
				className={`Result ${
					CurrentTicker.toLowerCase() == ResultData.displaySymbol.toLowerCase()
						? 'Active'
						: ''
				}`}
				key={Key}
				onClick={() =>
					PullNews(ResultData.displaySymbol, ResultData.displaySymbol)
				}
			>
				<p className="ResultTicker">{ResultData.displaySymbol}</p>
				<p className="ResultCompany">{ResultData.description}</p>
			</span>
		);
	};

	const CompanyElement = () => {
		return (
			<div className="CompanyDetailsSection">
				<div className="CompanyDetails">
					<h2>
						{CompanyDetails.ticker} - {CompanyDetails.name}
					</h2>
					<span className="CompanyDetailsFooter">
						<p>Country: {CompanyDetails.country}</p>
						<p>Market Cap: {CompanyDetails.marketCapitalization}</p>
					</span>
				</div>

				<img src={CompanyDetails.logo} />
			</div>
		);
	};

	const NewsItemElement = (Item: NewsObject) => {
		return (
			<div className="NewsItemContainer">
				<h2 className="NewsItemHeadline">{Item.headline}</h2>
				<div className="NewsItemDetailsContainer">
					{Item.summary && <p className="NewsItemSummary">{Item.summary}</p>}
					{Item.summary && Item.image && (
						<img className="NewsItemImage" src={Item.image} />
					)}
				</div>
				<p className="NewsItemFooter">
					{Item.source} - {Item.datetime}
				</p>
			</div>
		);
	};

	return (
		<div className="SearchContainer">
			<div className="SearchLeftSection">
				<input
					className="SearchBar"
					ref={SearchBarRef}
					onChange={CallSearch}
					placeholder={'Search...'}
				/>

				{Searching ? (
					<>
						{SearchResults &&
							SearchResults.map((Result) =>
								ResultElement(Result, Result.displaySymbol + Result.description)
							)}
					</>
				) : (
					<h2>Search Something</h2>
				)}
			</div>
			<div className="SearchRightSection">
				{CompanyDetails && <CompanyElement />}
				<div className="NewsContainer">
					{NewsItems?.map((NewsItem: NewsObject) => NewsItemElement(NewsItem))}
				</div>
			</div>
		</div>
	);
};

export default Search;
