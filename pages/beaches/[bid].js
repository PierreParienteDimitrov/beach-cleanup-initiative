import React from 'react';

const BeachDetailPage = () => {
	return <div></div>;
};

export default beach;

export async function getStaticProps(context) {
	const { params } = context;

	return {
		props: { locations },
	};
}

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { bid: '' } }],
// 		fallback: false,
// 	};
// }
