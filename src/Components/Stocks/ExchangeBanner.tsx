import React, { useEffect, useState } from 'react';
import { GetExchange } from '../../Functions/StockFunctions';
import { ExchangeType } from '../../Types/StockTypes';

type Props = {
	CurrencyList: string[];
};

const ExchangeBanner = ({ CurrencyList }: Props) => {
	const [ExchangeState, setExchangeState] = useState<
		ExchangeType[] | undefined
	>(undefined);

	const Exchange = async () => {
		const Data = await Promise.all(
			CurrencyList.map(async (Currency: string) => {
				let Response = await GetExchange(Currency);
				console.log(Response);
				return Response;
			})
		);

		setExchangeState(Data);
	};

	useEffect(() => {
		Exchange();
	}, []);

	return (
		<div className="ExchangeBanner">
			{ExchangeState ? (
				<div className="ScrollContainer" id="scroll-container">
					<p id="scroll-text">
						{ExchangeState?.map((Exchange) => {
							if (+Exchange['Realtime Currency Exchange Rate'] == undefined)
								return;
							let Rate =
								+Exchange['Realtime Currency Exchange Rate'][
									'5. Exchange Rate'
								];

							return (
								<span>
									{
										Exchange['Realtime Currency Exchange Rate'][
											'1. From_Currency Code'
										]
									}
									/
									{
										Exchange['Realtime Currency Exchange Rate'][
											'3. To_Currency Code'
										]
									}
									:<p>{Rate.toFixed(2)}</p>
								</span>
							);
						})}
					</p>
				</div>
			) : (
				<div id="scroll-container">
					<p id="scroll-text">Currency Conversion Data Unavailable</p>
				</div>
			)}
		</div>
	);
};

export default ExchangeBanner;
