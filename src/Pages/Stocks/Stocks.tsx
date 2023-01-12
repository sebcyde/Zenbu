import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CPIBanner from '../../Components/Stocks/CPIBanner';
import ExchangeBanner from '../../Components/Stocks/ExchangeBanner';
import InsiderTrades from '../../Components/Stocks/InsiderTrades';
import PerformanceBanner from '../../Components/Stocks/PerformanceBanner';
import { APIKEY } from '../../Config/Keys';
import {
	GetAllNews,
	GetInsiderTrades,
	GetFHQuote,
	GetCPI,
} from '../../Functions/StockFunctions';
import { CPIType, InsiderTradeType } from '../../Types/StockTypes';
import AllNews from './AllNews';

type Props = {};

const Stocks = (props: Props) => {
	const [PortJSX, setPortJSX] = useState<JSX.Element[]>();
	const ExchangeData = ['GBP', 'EUR', 'JPY'];
	const [CPI, setCPI] = useState<CPIType[]>();
	const Portfolio = ['aapl', 'msft', 'tsla'];

	const PortfolioJSX = async () => {
		const Elements = await Promise.all(
			Portfolio.map(async (StockTicker: string) => {
				const StockQuote = await GetFHQuote(StockTicker);
				const StockTrades = await GetInsiderTrades(StockTicker);

				return (
					<div className="StockContainer">
						<h2>{StockTicker}</h2>
						<PerformanceBanner Quote={StockQuote} />
						<InsiderTrades Trades={StockTrades} />
					</div>
				);
			})
		);
		return Elements;
	};

	useEffect(() => {
		GetCPI().then((CPIData) => setCPI(CPIData));
		PortfolioJSX().then((Elements) => setPortJSX(Elements));
	}, []);

	return (
		<div>
			{!CPI ? null : <CPIBanner CPI={CPI} />}
			<ExchangeBanner CurrencyList={ExchangeData} />

			<>
				{!PortJSX ? (
					<h2 className="DataSectionHeader">Loading Data...</h2>
				) : (
					<>
						<h2 className="PortfolioSectionHeader">Portfolio</h2>
						{PortJSX.map((Element: JSX.Element) => Element)}
					</>
				)}
			</>

			<AllNews />
		</div>
	);
};

export default Stocks;
