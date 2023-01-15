import React from 'react';
import UserDisplay from '../../Components/Settings/UserDisplay';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type Props = {};

const Settings = (props: Props) => {
	return (
		<div className="SettingsPage">
			<UserDisplay />
			<div>
				<h2>Account</h2>
				<span>
					<PersonOutlineOutlinedIcon /> Profile Data
				</span>
				<span>
					<CreditCardOutlinedIcon /> Billing and Payments
				</span>
			</div>
			<div>
				<h2>Settings</h2>
				<span>
					<EditOutlinedIcon />
					Account Details
				</span>
				<span>Anime Settings</span>
				<span>Stocks Settings</span>
				<span>General Settings</span>
			</div>
		</div>
	);
};

export default Settings;
