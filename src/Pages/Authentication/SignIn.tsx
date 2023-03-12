import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

type Props = {};

const SignIn = (props: Props) => {
	return (
		<div className="SignInContainer">
			<div className="SignUpBox">
				<h2 className="Header">Welcome Back</h2>
				<p className="Description">Sign In</p>

				<input placeholder="Email" type="email" />
				<input placeholder="Password" type="password" />

				<button>Sign In</button>
				<p>
					Don't have an account?{' '}
					<a className="Link" href="/signup">
						Register
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
