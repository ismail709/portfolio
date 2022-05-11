import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { sanityClient, urlFor } from '../../lib/sanity';

function Projects({ projects }) {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<div className="flex flex-col items-center flex-grow">
				<div className="title">Projects</div>
				<div className="section-lg">
					<div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full">
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
											alt="project screenshot"
										/>
									</div>
									<div className="project-card-title">
										{project.title}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const projects = await sanityClient.fetch(
		"*[ _type == 'project' && defined(screenshots) && defined(slug)]{_id,title,slug,'image':screenshots[0]}"
	);

	return {
		props: {
			projects,
		},
	};
}

export default Projects;
