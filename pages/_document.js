import { Main, Head, Html, NextScript } from 'next/document';

function Document() {
	return (
		<Html className="min-h-screen">
			<Head>
				<link rel="apple-touch-icon" href="/favicon.png" />
				<link rel="icon" href="/favicon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-primary-2 text-white min-h-screen">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default Document;
