import { connectToDatabase } from '../../util/mongodb';
import Location from '../../models/Location';

export default async function handler(req, res) {
	// const { method } = req;

	try {
		// Connection to Database
		await connectToDatabase();

		const allLocations = await Location.find();

		// console.log(allLocations);

		res.status(200).json(allLocations);
	} catch (err) {
		res.status(400).json({ success: false });
	}
}
