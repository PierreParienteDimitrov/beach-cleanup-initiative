import { connectToDatabase } from '../../util/mongodb';
import { getRangeData } from '../../util/getData';

export default async function handler(req, res) {
	// const { method } = req;

	const startIndex = parseInt(req.query.start);
	const endIndex = parseInt(req.query.end);

	// console.log(start);
	// console.log(end);

	try {
		const results = await getRangeData(startIndex, endIndex);
		res.status(200).json(results);
		return results;
	} catch (err) {
		res.status(400).json({ success: false });
	}
}
