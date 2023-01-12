import React from 'react';
import { FHQuoteType, GlobalQuoteType } from '../../Types/StockTypes';

type Props = {
	Quote: FHQuoteType;
};

const PerformanceBanner = ({ Quote }: Props) => {
	return (
		<div className="PerformanceBanner">
			<p>Price: ${Quote.c.toFixed(2)}</p>
			<p className={Quote.dp < 0 ? 'red' : 'green'}>
				Change: {Quote.dp.toFixed(2)}%
			</p>
		</div>
	);
};

export default PerformanceBanner;
