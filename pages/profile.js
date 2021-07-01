import { getSession } from 'next-auth/client';

const profile = ({ session }) => {
	return (
		<div>
			<h1>Your Profile</h1>
			<h2>Welcome {session.user.name}</h2>
		</div>
	);
};

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });
	console.log(session);

	if (!session) {
		return {
			redirect: {
				destination: 'login',
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
}

export default profile;
