import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIKEY } from '../../../Config/Keys';
import { GetCPI } from '../../../Functions/StockFunctions';
import { CPIType } from '../../../Types/StockTypes';

type Props = {
	CPI: CPIType[];
};

const CPIBanner = () => {
	const [CPI, setCPI] = useState<CPIType[]>();

	useEffect(() => {
		GetCPI().then((CPIData) => setCPI(CPIData));
		// PortfolioJSX().then((Elements) => setPortJSX(Elements));
	}, []);

	if (!CPI) {
		return <div className="CPIBanner">Loading CPI Data...</div>;
	} else {
		return (
			<div className="CPIBanner">
				<h2>CPI Data</h2>
				<div>
					<div>
						<p
							className={
								(+CPI[0].value).toFixed(2) > (+CPI[1].value).toFixed(2)
									? 'red'
									: 'green'
							}
						>
							{CPI[0].date} : {(+CPI[0].value).toFixed(2)}
						</p>
					</div>
					<div>
						<p>
							{CPI[1].date} : {(+CPI[1].value).toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		);
	}
};

export default CPIBanner;
