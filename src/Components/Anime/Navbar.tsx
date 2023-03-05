import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AnimeHome from './Homepage/AnimeHome';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 0 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function Navbar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }} className="AnimePageNavbar">
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="Home" {...a11yProps(0)} />
					<Tab label="Trending" {...a11yProps(1)} />
					<Tab label="New & Hot" {...a11yProps(2)} />
					<Tab label="All Anime" {...a11yProps(3)} />
					<Tab label="My Watchlists" {...a11yProps(4)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<AnimeHome />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Trending
			</TabPanel>
			<TabPanel value={value} index={2}>
				New & Hot
			</TabPanel>
			<TabPanel value={value} index={3}>
				All Anime
			</TabPanel>
			<TabPanel value={value} index={4}>
				My Watchlists
			</TabPanel>
		</Box>
	);
}
