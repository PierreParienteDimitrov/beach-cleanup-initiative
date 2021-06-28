import { connectToDatabase } from '../../util/mongodb';
import Location from '../../models/location';

// async function createLocation(locations) {
// 	// console.log('----------------------');
// 	// console.log(locations);

// 	locations.map((el) => {
// 		const entry = Location.create({ el });
// 	});
// }

export default async function handler(req, res) {
	const { method } = req;

	try {
		// Calling API
		const data = await fetch('https://api.coastal.ca.gov/access/v1/locations', {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		});

		const locations = await data.json();

		// Connection to Database
		await connectToDatabase();

		// Delete Locations
		// Location.deleteMany({}, function (err) {
		// 	if (err) console.log(err);
		// 	console.log('Successful deletion');
		// });

		// Adding Locations
		// locations.map((el) => {
		// 	Location.create(el, function (err) {
		// 		if (err) console.log(err);
		// 		console.log('Successful created');
		// 	});
		// });

		res.status(200).json({ message: 'success' });
	} catch (err) {
		res.status(400).json({ success: false });
	}
}
