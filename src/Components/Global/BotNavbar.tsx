import React from 'react';
import { useNavigate } from 'react-router-dom';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SettingsIcon from '@mui/icons-material/Settings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

type Props = {};

const BotNavbar = (props: Props) => {
	const navigate = useNavigate();

	return (
		<div className="BottomNavbar ">
			<div className="Page">
				<div onClick={() => navigate('/')}>
					<HomeOutlinedIcon />
				</div>
				<div onClick={() => navigate('/stocks')}>
					<ShowChartIcon />
				</div>
				<div onClick={() => navigate('/anime')}>
					<InsertEmoticonIcon />
				</div>
				<div onClick={() => navigate('/settings')}>
					<SettingsIcon />
				</div>
			</div>
		</div>
	);
};

export default BotNavbar;
