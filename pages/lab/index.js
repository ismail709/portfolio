import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient, urlFor } from '../../lib/sanity';

function Labs({ labs }) {
	return (
		<>
			<Head>
				<title>Labs</title>
			</Head>
			<div className="flex flex-col items-center flex-grow">
				<div className="title">Lab</div>
				<div className="section-lg">
					{labs?.map(lab => (
						<Link key={lab._id} href={'/lab/' + lab.slug.current}>
							<div className="lab-card">
								<div className="lab-icon">
									<Image
										src={urlFor(lab.icon.icon).url()}
										width="40"
										height="40"
									/>
								</div>
								<div className="lab-text">
									<div className="font-body font-bold text-xl">
										{lab.title}
									</div>
									<div className="font-body text-base">
										{lab.summary}
									</div>
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
	const labs = await sanityClient.fetch(
		"*[ _type == 'lab'] | order(_createdAt desc) {_id,title,slug,summary,icon->{icon}}"
	);

	return {
		props: {
			labs,
		},
	};
}

export default Labs;
