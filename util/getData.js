import { connectToDatabase } from './mongodb';
import Location from '../models/location';
import { connect } from 'mongodb';

export async function getAllData() {
	await connectToDatabase();

	const allLocations = await Location.find();

	const locations = JSON.parse(JSON.stringify(allLocations));

	// console.log(locations);

	return locations;
}

export async function getLimitData(number) {
	await connectToDatabase();

	const allLocations = await Location.find().limit(number);

	const locations = JSON.parse(JSON.stringify(allLocations));

	// console.log(locations);

	return locations;
}

export async function getURLData() {
	await connectToDatabase();

	const urls = await Location.find({}).select('URL');

	return urls;
}

export async function getOneByParams(bid) {
	console.log(bid);
	await connectToDatabase();

	const findLocationByUrl = await Location.find({ URL: bid });

	const location = JSON.parse(JSON.stringify(findLocationByUrl));

	return location;
}
