import { useState, useEffect } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllData, getLimitData } from '../../util/getData';

async function getBeaches() {
	const data = await fetch('/api/locations');
	const allBeaches = await data.json();

	console.log(allBeaches);

	// return allBeaches;
}

const Beaches = ({ allBeaches, firstFifty }) => {
	const [startIndex, setStartIndex] = useState(50);
	const [endIndex, setEndIndex] = useState(100);
	const [beaches, setBeaches] = useState(firstFifty);
	const [hasMore, setHasMore] = useState(true);

	async function fetchData() {
		// Calling API to send only subset of array
		const data = await fetch(
			`/api/locations?start=${startIndex}&&end=${endIndex}`
		);

		const nextBeaches = await data.json();

		// Adding new array to previous array
		setBeaches([...beaches, ...nextBeaches]);

		// Updating index
		setStartIndex(startIndex + 50);
		setEndIndex(endIndex + 50);
	}

	// Checking if hasMore is still true
	useEffect(() => {
		setHasMore(allBeaches.length > beaches.length ? true : false);
	}, [beaches, allBeaches.length]);

	return (
		<div>
			<h1>All beaches</h1>

			<div>
				<ul>
					<InfiniteScroll
						dataLength={beaches.length}
						next={fetchData}
						hasMore={hasMore}
						loader={<h4>Loading...</h4>}
						endMessage={<p>No more beaches</p>}
					>
						{beaches.map((el) => {
							return (
								<li key={el._id}>
									<Link href={`/beaches/${el.URL}`}>
										<a>{el.NameMobileWeb}</a>
									</Link>
								</li>
							);
						})}
					</InfiniteScroll>
				</ul>
			</div>
		</div>
	);
};

export default Beaches;

export async function getStaticProps() {
	const allBeaches = await getAllData();
	const firstFifty = await getLimitData(50);

	return {
		props: { allBeaches, firstFifty },
	};
}
