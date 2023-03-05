import axios from 'axios';

export const PullTopAnimeData = async () => {
	console.log('Pulling New Anime Data');
	const Res = await axios.get('https://api.jikan.moe/v4/top/anime');
	console.log('Response:', Res.data.data);
	return Res.data.data;
};
