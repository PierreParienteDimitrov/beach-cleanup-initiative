import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../util/mongodb';
import User from '../../../models/User';
import mongoose from 'mongoose';
import { verifyPassword } from '../../../util/hash';

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		Providers.Credentials({
			async authorize(credentials) {
				await connectToDatabase();

				const user = await User.findOne({ email: credentials.email });
				// console.log(user);

				if (!user) {
					mongoose.connection.close();
					throw new Error('No user found');
				}

				const isValid = await verifyPassword(credentials.password, user.password);

				if (!isValid) {
					mongoose.connection.close();
					throw new Error('Could not log you in');
				}

				mongoose.connection.close();

				return { email: user.email, name: user.name };
			},
		}),
	],
});
