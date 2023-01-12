import React, { useEffect, useState } from 'react';
import { GetExchange } from '../../Functions/StockFunctions';
import { ExchangeType } from '../../Types/StockTypes';

type Props = {
	CurrencyList: string[];
};

const ExchangeBanner = ({ CurrencyList }: Props) => {
	const [ExchangeState, setExchangeState] = useState<ExchangeType[]>();

	const Exchange = async () => {
		const Data = await Promise.all(
			CurrencyList.map(async (Currency: string) => {
				let Response = await GetExchange(Currency);
				console.log(Response);
				return Response;
			})
		);
		console.log('Total Exchange Data:', Data);
		// setExchangeState(Data);
	};

	useEffect(() => {
		// Exchange();
    
	}, []);

	return <div className="ExchangeBanner">ExchangeBanner</div>;
};

export default ExchangeBanner;
