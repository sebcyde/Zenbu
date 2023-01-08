import React from 'react';
import { FHQuoteType, GlobalQuoteType } from '../../Types/StockTypes';

type Props = {
	Quote: FHQuoteType;
};

const PerformanceBanner = ({ Quote }: Props) => {
	return (
		<div className="PerformanceBanner">
			<p>Price: ${Quote.c}</p>
			<p className={Quote.dp < 0 ? 'red' : 'green'}>Change: {Quote.dp}%</p>
		</div>
	);
};

export default PerformanceBanner;
