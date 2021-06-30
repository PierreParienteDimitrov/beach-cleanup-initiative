import mongoose from 'mongoose';
import { hashPassword } from '../../../util/hash';
import { validateEmail } from '../../../util/validations';
import { connectToDatabase } from '../../../util/mongodb';
import User from '../../../models/User';

export default async function handler(req, res) {
	await connectToDatabase();

	const { method, body } = req;

	console.log(method);

	// Validating req method
	if (!method === 'POST') {
		res.status(400).json({ message: 'Requet not accepted' });
		return;
	}

	try {
		const { name, email, password } = body;
		// Name validation
		if (!name) {
			res.status(400).json({ message: 'please enter your full name' });
		}

		// Email validation
		const emailValidation = await validateEmail(email);
		if (!emailValidation) {
			// if is not email, return true to setAlert to true
			res.status(400).json({ message: 'please enter a valid email' });
		}

		// Password validation
		if (!password) {
			res.status(400).json({ message: 'please enter a password' });
		}

		// Checking email in db
		const existingUser = await User.findOne({ email: email });
		// console.log(existingUser);

		if (existingUser) {
			res.status(422).json({ message: 'user exists already', alert: true });
			mongoose.connection.close();
			return;
		}

		// Hashing password
		const hashedPassword = await hashPassword(password);

		// console.log(hashedPassword);

		// Creating user
		const user = await User.create({
			name: name,
			email: email,
			password: hashedPassword,
		});

		res.status(201).json({ success: true, data: user, message: 'Created user' });
	} catch (err) {
		res.status(400).json({ success: false });
	}
}
