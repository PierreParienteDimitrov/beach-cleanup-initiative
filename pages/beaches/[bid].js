import { useRouter } from 'next/router';
import Image from 'next/image';
import { getOneByParams, getURLData } from '../../util/getData';
import { validatePicture } from '../../util/validations';

const BeachDetailPage = ({ data }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading....</div>;
	}

	const {
		DISTRICT,
		COUNTY,
		NameMobileWeb,
		LocationMobileWeb,
		DescriptionMobileWeb,
		PHONE_NMBR,
		FEE,
		PARKING,
		RESTROOMS,
		VISTOR_CTR,
		DOG_FRIENDLY,
		EZ4STROLLERS,
		PCNC_AREA,
		CAMPGROUND,
		SNDY_BEACH,
		DUNES,
		RKY_SHORE,
		BLUFF,
		STRS_BEACH,
		PTH_BEACH,
		WLDLFE_VWG,
		TIDEPOOL,
		VOLLEYBALL,
		FISHING,
		BOATING,
		GEOGR_AREA,
		LATITUDE,
		LONGITUDE,
		Photo_1,
		Photo_2,
		Photo_3,
		Photo_4,
		Bch_whlchr,
		BIKE_PATH,
		URL,
	} = data[0];

	// Validate picture url
	const pictureUrl = validatePicture(Photo_1, Photo_2, Photo_3, Photo_4);
	console.log(pictureUrl);

	return (
		<main>
			<div>
				<Image
					src={Photo_1}
					alt='Yellow footprint'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
			<div className='relative'>
				<h1>{NameMobileWeb}</h1>
			</div>
		</main>
	);
};

export default BeachDetailPage;

export async function getStaticProps(context) {
	const { params } = context;
	// console.log(params.bid);

	// Getting data for tha page from params value
	const data = await getOneByParams(params.bid);

	// Returning data as an array
	return {
		props: { data },
	};
}

export async function getStaticPaths() {
	// Getting all URL from helper function
	const data = await getURLData();

	// Building a params object that takes bid for key and the current URL for value
	const params = data.map((el) => {
		// console.log(el.URL);
		return {
			params: {
				bid: el.URL,
			},
		};
	});

	// Returning params objects
	return {
		paths: params,
		fallback: false,
	};
}
