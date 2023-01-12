import React from 'react';
import AnimeSection from '../../Components/Settings/AnimeSection';
import GeneralSection from '../../Components/Settings/GeneralSection';
import StocksSection from '../../Components/Settings/StocksSection';

type Props = {};

const Settings = (props: Props) => {
	return (
		<div className="SettingsPage">
			<GeneralSection />
			<StocksSection />
			<AnimeSection />
		</div>
	);
};

export default Settings;
