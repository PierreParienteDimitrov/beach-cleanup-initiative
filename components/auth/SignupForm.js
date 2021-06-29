import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footprint from '../../images/footprint.jpg';
import { validateEmail } from '../../util/validations';
import SignupBtn from '../buttons/SignupBtn';

async function createUser(name, email, password) {
	console.log(email);

	// adding validation
	const emailValidation = await validateEmail(email);
	console.log(emailValidation);

	if (!emailValidation) {
		// if is not email, return true to setAlert to true
		return true;
	}

	const response = await fetch('api/auth/create-user', {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Something went wrong!');
	}

	return data;
}

const SignupForm = () => {
	// Refs
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	// States
	const [alert, setAlert] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		// Reinitializing alert to false
		setAlert(false);

		const isTrue = await createUser(name, email, password);
		setAlert(isTrue);
	};

	return (
		<div className='w-full h-screen flex flex-col justify-center items-center'>
			<Image
				className='w-screen h-screen -z-10'
				src={footprint}
				alt='Yellow footprint'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
			/>

			<div className='mb-8 text-center'>
				<h3>Create your Free Account</h3>

				<h6>
					Already have an account?{' '}
					<Link href='/login'>
						<a>Sign In</a>
					</Link>
				</h6>
			</div>

			{/* Form */}
			<div className='w-4/12'>
				<form onSubmit={submitHandler} className='w-full'>
					{/* Name */}
					<div className='flex flex-col mb-6'>
						<label htmlFor='name'>Name</label>
						<input
							type='name'
							id='name'
							placeholder='Your full name'
							required
							ref={nameRef}
							className='border p-2 rounded-md'
						/>
					</div>
					{/* Email */}
					<div className='flex flex-col mb-6'>
						<label htmlFor='email'>Email*</label>
						<input
							// type='email'
							id='email'
							placeholder='you@email.com'
							required
							ref={emailRef}
							className='border p-2 rounded-md'
						/>
						{alert && <p>Please enter valid email</p>}
					</div>
					{/* Password */}
					<div className='flex flex-col mb-10'>
						<label htmlFor='password'>Password*</label>
						<input
							type='password'
							id='password'
							placeholder='Enter a strong password'
							required
							ref={passwordRef}
							className='border p-2 rounded-md'
						/>
					</div>

					<SignupBtn cta={'Sign Up'} />
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
