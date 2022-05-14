import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { sanityClient, urlFor } from '../../lib/sanity';

function Project({ project }) {
	return (
		<>
			<Head>
				<title>{project.title}</title>
			</Head>
			<div className="flex flex-col items-center flex-grow relative">
				<Link href="/projects">
					<div className="flex flex-row gap-2 items-center absolute top-4 left-4 p-2 border-2 fill-white cursor-pointer text-base">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							className="w-6"
						>
							<path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" />
						</svg>
						<span className="hidden sm:block">Go to projects</span>
					</div>
				</Link>

				<div className="title">{project.title}</div>
				{project.screenshots.slice(1).map(img => (
					<div className="relative section-lg h-96" key={img._key}>
						<Image
							src={urlFor(img).url()}
							layout="fill"
							alt="project screenshot"
						/>
					</div>
				))}
				<Link passHref>
					<a
						target="_blank"
						className="bg-white text-primary-2 text-base m-4 px-4 py-2 border-2 border-white hover:bg-transparent hover:text-white  hover:fill-white fill-primary-2"
					>
						<div className="flex flex-row gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
								className="w-6"
							>
								<path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
							</svg>
							Demo
						</div>
					</a>
				</Link>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	const paths =
		await sanityClient.fetch(`* [_type == 'project' && defined(slug)] {
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

	const project = await sanityClient.fetch(
		"* [ _type == 'project' && defined(slug) && slug.current == $slug ][0]",
		{ slug }
	);

	return {
		props: {
			project,
		},
	};
}

export default Project;
