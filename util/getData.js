import { connectToDatabase } from './mongodb';
import Beach from '../models/Beach';

// Get all locations data from database
export async function getAllData() {
	await connectToDatabase();

	const allBeaches = await Beach.find();

	const beaches = JSON.parse(JSON.stringify(allBeaches));

	// console.log(locations);

	return beaches;
}

// Get limited number of locations data from database
export async function getLimitData(number) {
	await connectToDatabase();

	const allBeaches = await Beach.find().limit(number);

	const beaches = JSON.parse(JSON.stringify(allBeaches));

	// console.log(locations);

	return beaches;
}

// Get one location by its url
export async function getURLData() {
	await connectToDatabase();

	const urls = await Beach.find({}).select('URL');

	return urls;
}

// Get one location by beach ID
export async function getOneByParams(bid) {
	console.log(bid);
	await connectToDatabase();

	const findLocationByUrl = await Beach.find({ URL: bid });

	const beach = JSON.parse(JSON.stringify(findLocationByUrl));

	return beach;
}

// Get range of locations at a time
export async function getRangeData(startIndex, endIndex) {
	const allBeaches = await getAllData();

	const rangeArr = allBeaches.slice(startIndex, endIndex);

	return rangeArr;
}

// const remainingBeaches = allBeaches.slice(beaches.length);
// // console.log('remaning beaches: ' + remainingBeaches.length);

// const nextFifty = remainingBeaches.slice(0, 50);
// console.log('next fifty: ' + nextFifty.length);

// setBeaches([...beaches, ...nextFifty]);
// }
