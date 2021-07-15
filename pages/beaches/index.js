import { useState, useEffect } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllData, getLimitData } from '../../util/getData';
import Card from '../../components/Cards/Card';
import MobileContainer from '../../components/Layouts/MobileContainer';

const Beaches = ({ allBeaches, firstBeaches }) => {
	const [startIndex, setStartIndex] = useState(20);
	const [endIndex, setEndIndex] = useState(100);
	const [beaches, setBeaches] = useState(firstBeaches);
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
		setStartIndex(startIndex + 20);
		setEndIndex(endIndex + 20);
	}

	// Checking if hasMore is still true
	useEffect(() => {
		setHasMore(allBeaches.length > beaches.length ? true : false);
	}, [beaches, allBeaches.length]);

	return (
		<MobileContainer>
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
							className='md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-4'
						>
							{beaches.map((el) => {
								return (
									<div key={el._id}>
										<Card beach={el} />
									</div>
								);
							})}
						</InfiniteScroll>
					</ul>
				</div>
			</div>
		</MobileContainer>
	);
};

export default Beaches;

export async function getStaticProps() {
	const allBeaches = await getAllData();
	const firstBeaches = await getLimitData(20);

	return {
		props: { allBeaches, firstBeaches },
	};
}
