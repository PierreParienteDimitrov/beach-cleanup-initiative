import urlPlaceholder from '../images/footprint.jpg';

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
		return urlPlaceholder;
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

export function validateAmenities(
	PARKING,
	RESTROOMS,
	VISTOR_CTR,
	DOG_FRIENDLY,
	EZ4STROLLERS,
	PCNC_AREA,
	CAMPGROUND,
	VOLLEYBALL
) {
	const amenitiesArr = [
		PARKING,
		RESTROOMS,
		VISTOR_CTR,
		DOG_FRIENDLY,
		EZ4STROLLERS,
		PCNC_AREA,
		CAMPGROUND,
		VOLLEYBALL,
	];

	const amenities = [
		{ icon: '', data: PARKING, info: 'parking' },
		{ icon: '', data: RESTROOMS, info: 'restrooms' },
		{ icon: '', data: VISTOR_CTR, info: 'visitor center' },
		{ icon: '', data: DOG_FRIENDLY, info: 'dog friendly' },
		{ icon: '', data: EZ4STROLLERS, info: 'easy for strollers' },
		{ icon: '', data: PCNC_AREA, info: 'picnic area' },
		{ icon: '', data: CAMPGROUND, info: 'campground' },
		{ icon: '', data: VOLLEYBALL, info: 'volleyball' },
	];

	const filteredAmenities = amenities.filter((el) => {
		return el.data !== '';
	});

	return filteredAmenities;
}
