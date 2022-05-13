import Link from 'next/link';

function Navbar() {
	return (
		<nav className="navbar-container">
			<ul className="navbar">
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
