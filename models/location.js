import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const LocationSchema = new mongoose.Schema({
	ID: {
		type: Number,
		required: true,
	},
	DISTRICT: {
		type: String,
		required: true,
	},
	COUNTY: {
		type: String,
		required: true,
	},
	NameMobileWeb: {
		type: String,
		required: true,
	},
	LocationMobileWeb: {
		type: String,
		required: true,
	},
	DescriptionMobileWeb: {
		type: String,
		required: true,
	},
	PHONE_NMBR: {
		type: Number,
		required: false,
	},
	FEE: {
		type: String,
		required: false,
	},
	PARKING: {
		type: String,
		required: false,
	},
	RESTROOMS: {
		type: String,
		required: false,
	},
	VISTOR_CTR: {
		type: String,
		required: false,
	},
	DOG_FRIENDLY: {
		type: String,
		required: false,
	},
	EZ4STROLLERS: {
		type: String,
		required: false,
	},
	PCNC_AREA: {
		type: String,
		required: false,
	},
	CAMPGROUND: {
		type: String,
		required: false,
	},
	SNDY_BEACH: {
		type: String,
		required: false,
	},
	DUNES: {
		type: String,
		required: false,
	},
	RKY_SHORE: {
		type: String,
		required: false,
	},
	BLUFF: {
		type: String,
		required: false,
	},
	STRS_BEACH: {
		type: String,
		required: false,
	},
	PTH_BEACH: {
		type: String,
		required: false,
	},
	WLDLFE_VWG: {
		type: String,
		required: false,
	},
	TIDEPOOL: {
		type: String,
		required: false,
	},
	VOLLEYBALL: {
		type: String,
		required: false,
	},
	FISHING: {
		type: String,
		required: false,
	},
	BOATING: {
		type: String,
		required: false,
	},
	FISHING: {
		type: String,
		required: false,
	},
	GEOGR_AREA: {
		type: String,
		required: false,
	},
	LATITUDE: {
		type: Number,
		required: true,
	},
	LONGITUDE: {
		type: Number,
		required: true,
	},
	Photo_1: {
		type: String,
		required: false,
	},
	Photo_2: {
		type: String,
		required: false,
	},
	Photo_3: {
		type: String,
		required: false,
	},
	Photo_4: {
		type: String,
		required: false,
	},
	Bch_whlchr: {
		type: String,
		required: false,
	},
	BIKE_PATH: {
		type: String,
		required: false,
	},
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
