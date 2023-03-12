import React, { useEffect, useState } from 'react';
import { GetFHQuote, GetInsiderTrades } from '../../../Functions/StockFunctions';
import InsiderTrades from '../InsiderTrades';
import PerformanceBanner from './PerformanceBanner';

type Props = {};

const PortList = (props: Props) => {
	const [PortJSX, setPortJSX] = useState<JSX.Element[]>();
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
		PortfolioJSX().then((Elements) => setPortJSX(Elements));
	}, []);

	return (
		<div>
			{!PortJSX ? (
				<h2 className="DataSectionHeader">Loading Data...</h2>
			) : (
				<>
					<h2 className="PortfolioSectionHeader">Portfolio</h2>
					{PortJSX.map((Element: JSX.Element) => Element)}
				</>
			)}
		</div>
	);
};

export default PortList;
