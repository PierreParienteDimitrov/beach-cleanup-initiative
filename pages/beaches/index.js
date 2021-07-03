import { useState, useEffect } from 'react';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllData, getLimitData } from '../../util/getData';

const Beaches = ({ allBeaches, firstFifty }) => {
	const [beaches, setBeaches] = useState(firstFifty);
	const [hasMore, setHasMore] = useState(true);

	// console.log('beaches length: ' + beaches.length);

	function fetchData() {
		const remainingBeaches = allBeaches.slice(beaches.length);
		// console.log('remaning beaches: ' + remainingBeaches.length);

		const nextFifty = remainingBeaches.slice(0, 50);
		console.log('next fifty: ' + nextFifty.length);

		setBeaches([...beaches, ...nextFifty]);
	}

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
