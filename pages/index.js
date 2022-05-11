import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient, urlFor } from '../lib/sanity';

export default function Home({ articles, labs, projects }) {
	return (
		<>
			<Head>
				<title>Ismail Rhilal</title>
			</Head>
			<div className="flex flex-col items-center justify-center">
				<div className="title text-2xl">RHILAL ISMAIL</div>
				<div className="section-sm text-base text-justify font-body sm:text-xl">
					Ismail is a back end developer who loves anything related to
					coding. His research skills helped him navigate many
					problems he faced on his journey to become the person he is
					now.
				</div>
				<div className="title">Projects</div>
				<div className="section-lg">
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
						{projects?.map(project => (
							<Link
								key={project._id}
								href={'/projects/' + project.slug.current}
							>
								<div className="project-card">
									<div className="project-card-img">
										<Image
											src={urlFor(project.image).url()}
											layout="fill"
											className="object-cover object-top"
											alt={project.title}
										/>
									</div>
									<div className="project-card-title">
										{project.title}
									</div>
								</div>
							</Link>
						))}
					</div>
					{projects.length > 0 && (
						<Link href="/projects" passHref>
							<a className="show-more">Show me more</a>
						</Link>
					)}
				</div>
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
					{articles.length > 0 && (
						<Link href="/articles" passHref>
							<a className="show-more">Show me more</a>
						</Link>
					)}
				</div>
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
										alt="lab icon"
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
					{labs.length > 0 && (
						<Link href="/lab" passHref>
							<a className="show-more">Show me more</a>
						</Link>
					)}
				</div>
				<div className="title">Contact</div>
				<div className="section-sm">
					<Link href="mailto:ismailrhilalcontact@gmail.com">
						<a target="_blank" className="w-full">
							<div className="contact-card bg-[#4285F4]">
								<div className="contact-icon">
									<svg
										className="w-8 fill-white"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 488 512"
									>
										<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
									</svg>
								</div>
								<div className="contact-text">
									<div className="font-body font-bold text-xl">
										Email me
									</div>
								</div>
							</div>
						</a>
					</Link>
					<Link href="https://twitter.com/IsmailRhilal" passHref>
						<a target="_blank" className="w-full">
							<div className="contact-card bg-[#1DA1F2]">
								<div className="contact-icon">
									<svg
										className="w-8 fill-white"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
									</svg>
								</div>
								<div className="contact-text">
									<div className="font-body font-bold text-xl">
										Say Hello
									</div>
								</div>
							</div>
						</a>
					</Link>
					<Link href="https://github.com/ismail709">
						<a target="_blank" className="w-full">
							<div className="contact-card bg-[#333]">
								<div className="contact-icon">
									<svg
										className="w-8 fill-white"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 496 512"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
									</svg>
								</div>
								<div className="contact-text">
									<div className="font-body font-bold text-xl">
										Follow me
									</div>
								</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const articles = await sanityClient.fetch(
		"*[ _type == 'article'] | order(_createdAt desc)[0...3]"
	);
	const labs = await sanityClient.fetch(
		"*[ _type == 'lab'] | order(_createdAt desc)[0...3] {_id,title,slug,summary,icon->{icon}}"
	);
	const projects = await sanityClient.fetch(
		"*[ _type == 'project' && defined(screenshots) && defined(slug) && showInHomePage == true]{_id,title,slug,'image':screenshots[0]}"
	);

	return {
		props: {
			articles,
			labs,
			projects,
		},
	};
}
