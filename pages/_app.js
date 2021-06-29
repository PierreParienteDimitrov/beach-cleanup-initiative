import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleStart = (url) => {
			console.log(`Loading: ${url}`);
			NProgress.start();
		};

		const handleStop = () => {
			NProgress.done();
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.on('routeChangeStart', handleStart);
			router.events.on('routeChangeComplete', handleStop);
			router.events.on('routeChangeError', handleStop);
		};
	}, [router]);

	return <Component {...pageProps} />;
}

export default MyApp;
