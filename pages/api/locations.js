// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	const locations = await fetch(
		'https://api.coastal.ca.gov/access/v1/locations',
		{
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json',
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
	);

	const data = await locations.json();

	console.log(data);

	res.status(200).json(data);
}
