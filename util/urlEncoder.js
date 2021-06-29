export default function createURLs(array) {
	console.log(array.length);

	array.map((object) => {
		const name = object.NameMobileWeb.toLowerCase();
		// console.log(name);

		const urlEncode = name
			.replace(/[^a-zA-Z ]/g, '')
			.split(' ')
			.join('-'); // "Hello World"

		// console.log(urlEncode);

		object.URL = urlEncode;

		// const url = encodeUri;
	});

	return array;
}

// str = str.replace(/ /g, '_');
// // or
// str = str.split(' ').join('_');
