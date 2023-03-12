import React from 'react';
import UserDisplay from '../../Components/Settings/UserDisplay';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { signOut } from 'firebase/auth';
import { auth } from '../../Config/Firebase';

type Props = {};

const Settings = (props: Props) => {
	const LogOut = async () => {
		try {
			signOut(auth);
		} catch (error: any) {
			console.log('Sign Out Failed:', error.code);
		}
	};

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
			<div>
				<h2>Other Settings</h2>
				{/* <span>
					<EditOutlinedIcon />
					Account Details
				</span> */}
				{/* <span>Anime Settings</span>
				<span>Stocks Settings</span> */}
				<button onClick={LogOut}>Log Out</button>
			</div>
		</div>
	);
};

export default Settings;
