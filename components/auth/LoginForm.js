import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { signIn } from 'next-auth/client';
import SignupBtn from '../buttons/SignupBtn';

const LoginForm = () => {
	// Refs
	const emailRef = useRef();
	const passwordRef = useRef();

	// Router
	const router = useRouter();

	// SubmitHandler
	const submitHandler = async (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		const result = await signIn('credentials', {
			redirect: false,
			email: email,
			password: password,
		});

		if (result.ok) {
			router.replace('/profile');
		}
	};

	return (
		<div className='w-full h-screen flex flex-col justify-center items-center'>
			<div className='mb-8 text-center'>
				<h3>Login to your account</h3>

				<div className='flex items-center justify-center'>
					<h5 className='mr-1'>Don&apos;t have an account?</h5>
					<Link href='/signup'>
						<a className='text-blue-600'>Create your account</a>
					</Link>
				</div>
			</div>

			{/* Form */}
			<div className='w-4/12'>
				<form onSubmit={submitHandler} className='w-full'>
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
					</div>

					<SignupBtn cta={'Log in'} />
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
