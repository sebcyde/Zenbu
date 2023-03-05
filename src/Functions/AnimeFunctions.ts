import axios from 'axios';
import { AnimeType, RawAnimeListType } from '../Types/AnimeTypes';

export const PullTopAnimeData = async () => {
	console.log('Pulling New Anime Data');
	const Res = await axios.get('https://api.jikan.moe/v4/top/anime');
	console.log('Response:', Res.data.data);
	return Res.data.data;
};

export const PullAllAnimeData = async () => {
	const Res = await axios.get('https://api.jikan.moe/v4/anime?page=6');
	let FullList: AnimeType[] = [...Res.data.data];
	console.log('Full Anime List:', Res.data);
	return FullList;

	// Need to pull all pages and concat?
	// const FullList = await Promise.all(() => {});
};

export const JoinPages = async () => {
	const Res = await axios.get('https://api.jikan.moe/v4/anime');
	let FullList: AnimeType[] = [...Res.data.data];
	console.log('Full Anime List:', FullList);
};
