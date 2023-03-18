import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CPIBanner from '../../Components/Stocks/News/CPIBanner';
import ExchangeBanner from '../../Components/Stocks/News/ExchangeBanner';
import InsiderTrades from '../../Components/Stocks/InsiderTrades';
import Navbar from '../../Components/Stocks/Navbar';
import PerformanceBanner from '../../Components/Stocks/Portfolio/All/PerformanceBanner';
import { APIKEY } from '../../Config/Keys';
import {
	GetAllNews,
	GetInsiderTrades,
	GetFHQuote,
	GetCPI,
} from '../../Functions/StockFunctions';
import { CPIType, InsiderTradeType } from '../../Types/StockTypes';
import AllNews from '../../Components/Stocks/News/AllNews';

type Props = {};

const Stocks = (props: Props) => {
	return (
		<div className="Page">
			<Navbar />
		</div>
	);
};

export default Stocks;
