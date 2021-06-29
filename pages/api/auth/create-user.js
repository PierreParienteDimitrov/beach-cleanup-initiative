import { validateEmail } from '../../../util/validations';

export default async function handler(req, res) {
	const { method, body } = req;

	console.log(method);
	console.log(body);

	const { name, email, password } = body;

	console.log(name);

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
		res.status(400).json({ message: 'please enter your full name' });
	}

	res.status(200).json({ message: 'success' });
}
