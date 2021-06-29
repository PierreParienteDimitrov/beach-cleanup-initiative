import Link from 'next/link';
import { getAllData } from '../../util/getData';

const beaches = ({ locations }) => {
	return (
		<div>
			<h1>All beaches</h1>

			<div>
				<ul>
					{locations.map((el) => {
						return (
							<li key={el._id}>
								<Link href={`/beaches/${el.URL}`}>
									<a>{el.NameMobileWeb}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default beaches;

export async function getStaticProps() {
	const locations = await getAllData();

	return {
		props: { locations },
	};
}
