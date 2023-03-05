import { AnimeListType } from '../../../../Types/AnimeTypes';
import TopAnimeBox from './TopAnimeBox';

type Props = {
	AnimeList: AnimeListType;
};

const LeftSideBar = ({ AnimeList }: Props) => {
	return (
		<div className="LeftSideBarContainer">
			<TopAnimeBox AnimeList={AnimeList} Title={'Top Anime'} />
		</div>
	);
};

export default LeftSideBar;
