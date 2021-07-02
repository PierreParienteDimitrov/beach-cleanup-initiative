export function validateEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (email.match(re)) {
		return true;
	} else {
		return false;
	}
}

export function validatePicture(Photo_1, Photo_2, Photo_3, Photo_4) {
	if (Photo_1 === '' && Photo_2 === '' && Photo_3 === '' && Photo_4 === '') {
		return 'url-placeholder';
	}

	if (Photo_1 === '') {
		if (Photo_2 === '') {
			if (Photo_3 === '') {
				return Photo_4;
			} else {
				return Photo_3;
			}
		} else {
			return Photo_2;
		}
	} else {
		return Photo_1;
	}
}
