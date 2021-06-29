import { connectToDatabase } from '../../util/mongodb';
import Location from '../../models/location';

const beaches = ({ locations }) => {
	return (
		<div>
			<h1>All beaches</h1>

			<div>
				<ul>
					{locations.map((el) => {
						return <li key={el._id}>{el.NameMobileWeb}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default beaches;

export async function getStaticProps() {
	await connectToDatabase();

	const allLocations = await Location.find();

	// console.log(allLocations);

	const locations = JSON.parse(JSON.stringify(allLocations));

	return {
		props: { locations },
	};
}
