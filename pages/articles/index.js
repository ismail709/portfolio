import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { sanityClient } from '../../lib/sanity';

function Articles({ articles }) {
	return (
		<>
			<Head>
				<title>Articles</title>
			</Head>
			<div className="flex flex-col items-center flex-grow">
				<div className="title">Articles</div>
				<div className="section-lg">
					{articles?.map(article => (
						<Link
							key={article._id}
							href={'/articles/' + article.slug.current}
						>
							<div className="article-card">
								<div className="font-body font-bold text-xl">
									{article.title}
								</div>
								<div className="font-body text-base">
									{article.summary}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const articles = await sanityClient.fetch(
		"*[ _type == 'article'] | order(_createdAt desc)"
	);

	return {
		props: {
			articles,
		},
	};
}

export default Articles;
