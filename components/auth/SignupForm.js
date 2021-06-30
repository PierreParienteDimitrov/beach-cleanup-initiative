import { useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { validateEmail } from '../../util/validations';
import SignupBtn from '../buttons/SignupBtn';

async function createUser(name, email, password) {
	// console.log(email);

	const response = await fetch('/api/auth/create-user', {
		method: 'POST',
		body: JSON.stringify({ name, email, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();
	console.log(data);

	// if (!response.ok) {
	// 	throw new Error(data.message || 'Something went wrong!');
	// }

	return data;
}

const SignupForm = () => {
	// Refs
	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	// States
	const [nameAlert, setNameAlert] = useState(false);
	const [emailAlert, setEmailAlert] = useState(false);
	const [passwordAlert, setPasswordAlert] = useState(false);
	const [existingUserAlert, setexistingUserAlert] = useState(false);

	// Router
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		// Reinitializing alert to false
		setNameAlert(false);
		setEmailAlert(false);
		setPasswordAlert(false);
		setexistingUserAlert(false);

		// Name validation
		if (!name) {
			setNameAlert(true);
		}

		// Email validation
		const emailValidation = await validateEmail(email);
		if (!emailValidation) {
			// if is not email, return true to setAlert to true
			return setEmailAlert(true);
		}

		// Password validation
		if (!password) {
			setPasswordAlert(true);
		}

		const result = await createUser(name, email, password);

		setexistingUserAlert(result.alert);

		if (result.success) {
			router.replace('/profile');
		}
	};

	return (
		<div className='w-full h-screen flex flex-col justify-center items-center'>
			<div className='mb-8 text-center'>
				<h3>Create your Free Account</h3>

				<div className='flex items-center justify-center'>
					<h5 className='mr-1'>Already have an account?</h5>
					<Link href='/login'>
						<a className='text-blue-600'>Sign In</a>
					</Link>
				</div>

				{existingUserAlert && (
					<h6 className='mt-2 text-red-500'>
						User already exist. Sign In to your account instead.
					</h6>
				)}
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
							// required
							ref={nameRef}
							className='border p-2 rounded-md'
						/>
						{nameAlert && (
							<h6 className='text-red-500'>Please enter your full name</h6>
						)}
					</div>
					{/* Email */}
					<div className='flex flex-col mb-6'>
						<label htmlFor='email'>Email*</label>
						<input
							// type='email'
							id='email'
							placeholder='you@email.com'
							// required
							ref={emailRef}
							className='border p-2 rounded-md'
						/>
						{emailAlert && <h6 className='text-red-500'>Please enter valid email</h6>}
					</div>
					{/* Password */}
					<div className='flex flex-col mb-10'>
						<label htmlFor='password'>Password*</label>
						<input
							type='password'
							id='password'
							placeholder='Enter a strong password'
							// required
							ref={passwordRef}
							className='border p-2 rounded-md'
						/>
						{passwordAlert && (
							<h6 className='text-red-500'>Please enter a password</h6>
						)}
					</div>

					<SignupBtn cta={'Sign Up'} />
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
