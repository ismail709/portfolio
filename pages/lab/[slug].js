import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient, urlFor } from '../../lib/sanity';

function Lab({ lab }) {
	const components = {
		types: {
			image: ({ value }) => {
				const { width, height } = getImageDimensions(value);

				return (
					<div
						className="relative max-w-full mx-auto"
						style={{ width: width, height: height }}
					>
						<Image
							src={urlFor(value).url()}
							layout="fill"
							alt={lab.title}
						/>
					</div>
				);
			},
		},
		block: {
			justified: ({ children }) => {
				return <div className="text-justify">{children}</div>;
			},
		},
	};
	return (
		<>
			<Head>
				<title>{lab.title}</title>
			</Head>
			<div className="flex flex-col items-center flex-grow relative">
				<Link href="/lab">
					<div className="flex flex-row gap-2 items-center lg:absolute lg:top-4 lg:left-4 order-last mb-4 p-2 border-2 fill-white cursor-pointer text-base">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							className="w-6"
						>
							<path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
						</svg>
						Go to labs
					</div>
				</Link>

				<div className="title">{lab.title}</div>
				<div className="section-lg items-start">
					<PortableText value={lab.body} components={components} />
				</div>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const paths =
		await sanityClient.fetch(`* [_type == 'lab' && defined(slug)] {
        'params': {
            'slug':slug.current
        }
    }`);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;

	const lab = await sanityClient.fetch(
		"* [ _type == 'lab' && defined(slug) && slug.current == $slug ][0]",
		{ slug }
	);

	return {
		props: {
			lab,
		},
	};
}

export default Lab;
