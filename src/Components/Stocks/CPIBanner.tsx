import axios from 'axios';
import React from 'react';
import { APIKEY } from '../../Config/Keys';
import { CPIType } from '../../Types/StockTypes';

type Props = {
	CPI: CPIType[];
};

const CPIBanner = ({ CPI }: Props) => {
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
};

export default CPIBanner;
