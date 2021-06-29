import { useRouter } from 'next/router';
import { getOneByParams, getURLData } from '../../util/getData';

const BeachDetailPage = ({ data }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading....</div>;
	}

	const { NameMobileWeb } = data[0];
	return (
		<div>
			<h1>{NameMobileWeb}</h1>
		</div>
	);
};

export default BeachDetailPage;

export async function getStaticProps(context) {
	const { params } = context;
	// console.log(params.bid);

	// Getting data for tha page from params value
	const data = await getOneByParams(params.bid);

	// Returning data as an array
	return {
		props: { data },
	};
}

export async function getStaticPaths() {
	// Getting all URL from helper function
	const data = await getURLData();

	// Building a params object that takes bid for key and the current URL for value
	const params = data.map((el) => {
		// console.log(el.URL);
		return {
			params: {
				bid: el.URL,
			},
		};
	});

	// Returning params objects
	return {
		paths: params,
		fallback: false,
	};
}
