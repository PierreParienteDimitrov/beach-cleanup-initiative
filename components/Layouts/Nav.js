import { signOut } from 'next-auth/client';

const Nav = () => {
	const handleClick = () => {
		signOut();
	};

	return (
		<nav>
			<ul>
				<li>
					<button onClick={handleClick}>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
