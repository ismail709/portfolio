import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
