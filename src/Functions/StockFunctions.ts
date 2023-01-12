import axios from 'axios';
import { APIKEY, FHKEY } from '../Config/Keys';
import {
	CPIType,
	ExchangeType,
	FHQuoteType,
	GlobalQuoteType,
	InsiderTradeType,
	NewsType,
} from '../Types/StockTypes';

export const GetFHQuote = async (Ticker: string): Promise<FHQuoteType> => {
	let Response = await axios.get(
		`https://finnhub.io/api/v1/quote?symbol=${Ticker}&token=${FHKEY}`
	);
	let Data = Response.data;
	return Data;
};

export const GetCPI = async (): Promise<CPIType[]> => {
	const Response = await axios.get(
		`https://www.alphavantage.co/query?function=CPI&interval=monthly&apikey=${APIKEY}`
	);
	const Data = Response.data.data;
	return Data;
};

export const GetInsiderTrades = async (
	Ticker: string
): Promise<InsiderTradeType[]> => {
	const Response = await axios.get(
		`https://finnhub.io/api/v1/stock/insider-transactions?symbol=${Ticker}&token=${FHKEY}`
	);
	const Data = Response.data.data;
	return Data;
};

export const GetAllNews = async (): Promise<NewsType[]> => {
	const GeneralNews = await axios.get(
		`https://finnhub.io/api/v1/news?category=general&minId=10&token=${FHKEY}`
	);
	const Data = GeneralNews.data;
	return Data;
};

export const GetExchange = async (Currency: string): Promise<ExchangeType> => {
	const Response = await axios.get(
		`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=${Currency}&apikey=${APIKEY}`
	);
	const Data = Response.data;
	console.log('Data:', Data);
	return Data;
};
