import SignupForm from '../components/auth/SignupForm';
import Image from 'next/image';
import footprint from '../images/footprint.jpg';

const signup = () => {
	return (
		<>
			<Image
				src={footprint}
				alt='Yellow footprint'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
			/>
			<div className='relative'>
				<SignupForm />
			</div>
		</>
	);
};

export default signup;
