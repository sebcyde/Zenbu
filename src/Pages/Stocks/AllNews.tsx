import React, { useEffect, useState } from 'react';
import { GetAllNews } from '../../Functions/StockFunctions';
import { NewsType } from '../../Types/StockTypes';

type Props = {};

const StockNews = (props: Props) => {
	const [NewsArticles, setNewsArticles] = useState<NewsType[]>();
	const [Loading, setLoading] = useState(true);

	const PullNews = async () => {
		const NewsData = await GetAllNews();
		setNewsArticles(NewsData);
		setLoading(false);
	};

	useEffect(() => {
		PullNews();
	}, []);

	return (
		<div>
			{Loading || !NewsArticles ? (
				<h1 className="NewsSectionHeader">Loading News...</h1>
			) : (
				<>
					<h1 className="NewsSectionHeader">Recent News</h1>
					{NewsArticles.map((Article: NewsType) => {
						let date = new Date(Article.datetime * 1000);

						return (
							<div className="NewsArticle" key={Article.id}>
								<div className="NewsArticleDetails">
									<h2>{Article.headline}</h2>
									<div className="ArticleSource">
										<p>{Article.source}</p>
										<p>{date.toISOString().slice(0, 10)}</p>
									</div>
								</div>
								<div className="ArticleImageContainer">
									<img src={Article.image} />
								</div>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

export default StockNews;
