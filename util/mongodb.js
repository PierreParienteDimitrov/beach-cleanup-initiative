/* This is a database connection function*/
import mongoose from 'mongoose';

const connection = {}; /* creating connection object*/

export async function connectToDatabase() {
	/* check if we have connection to our databse*/
	if (connection.isConnected) {
		return;
	}

	/* connecting to our database */

	try {
		const db = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});

		connection.isConnected = db.connections[0].readyState;

		console.log('connected to database');
	} catch (error) {
		console.log(error);
	}
}
