export type GlobalQuoteType = {
	'01. symbol': string;
	'02. open': string;
	'03. high': string;
	'04. low': string;
	'05. price': string;
	'06. volume': string;
	'07. latest trading day': string;
	'08. previous close': string;
	'09. change': string;
	'10. change percent': string;
};

export type FHQuoteType = {
	c: number;
	d: number;
	dp: number;
	h: number;
	l: number;
	o: number;
	pc: number;
	t: number;
};

export type CPIType = {
	date: string;
	value: string;
};

export type InsiderTradeType = {
	change: number;
	filingDate: string;
	id: string;
	name: string;
	share: null | number;
	symbol: string;
	transactionCode: string;
	transactionDate: string;
	transactionPrice: number;
};

export type NewsType = {
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

export type ExchangeType = {
	'Realtime Currency Exchange Rate': {
		'1. From_Currency Code': string;
		'2. From_Currency Name': string;
		'3. To_Currency Code': string;
		'4. To_Currency Name': string;
		'5. Exchange Rate': string;
		'6. Last Refreshed': string;
		'7. Time Zone': string;
		'8. Bid Price': string;
		'9. Ask Price': string;
	};
};
