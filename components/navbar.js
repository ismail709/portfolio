import Link from 'next/link';

function Navbar() {
	return (
		<nav className="flex justify-center w-full text-white font-display bg-[#D62828]">
			<ul className="flex flex-row gap-4 p-4 text-[14px]">
				<li>
					<Link href="/" passHref>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/articles" passHref>
						<a>Articles</a>
					</Link>
				</li>
				<li>
					<Link href="/lab" passHref>
						<a>Lab</a>
					</Link>
				</li>
				<li>
					<Link href="/about" passHref>
						<a>About</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
