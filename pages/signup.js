import Link from 'next/link';

const signup = () => {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log('clicked');
	};

	return (
		<div>
			<div>
				<h1>Create your Free Account</h1>
				<p>
					Already have an account?{' '}
					<Link href='/signin'>
						<a>Sign In</a>
					</Link>
				</p>
			</div>
			<form onSubmit={submitHandler}>
				{/* Name */}
				<div>
					<label htmlFor='name'>Name</label>
					<input type='name' id='name' placeholder='Your full name' required />
				</div>
				{/* Email */}
				<div>
					<label htmlFor='email'>Email*</label>
					<input type='email' id='email' placeholder='you@email.com' required />
				</div>
				{/* Passowrd */}
				<div>
					<label htmlFor='password'>Password*</label>
					<input
						type='password'
						id='password'
						placeholder='Enter a strong password'
						required
					/>
				</div>
				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default signup;
