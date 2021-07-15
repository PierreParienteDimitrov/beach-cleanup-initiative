import Image from 'next/image';
import { validatePicture } from '../../util/validations';

const Card = ({ beach }) => {
	const {
		DescriptionMobileWeb,
		Photo_1,
		Photo_2,
		Photo_3,
		Photo_4,
		NameMobileWeb,
	} = beach;

	const pictureUrl = validatePicture(Photo_1, Photo_2, Photo_3, Photo_4);

	return (
		<div className='bg-white p-4 rounded-2xl mb-10'>
			<Image
				src={pictureUrl}
				alt={NameMobileWeb}
				layout='responsive'
				width={700}
				height={475}
				className='rounded-2xl'
			/>
			<br />
			<h4>{DescriptionMobileWeb}</h4>
		</div>
	);
};

export default Card;
