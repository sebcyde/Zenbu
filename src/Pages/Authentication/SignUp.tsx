import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

type Props = {};

const SignUp = (props: Props) => {
	return (
		<div className="SignUpContainer">
			<div className="SignUpBox">
				<h2 className="Header">Welcome to Zenbu</h2>
				<p className="Description">Register</p>

				<input placeholder="Display Name" type="text" />
				<input placeholder="Email" type="email" />

				<input placeholder="Password" type="password" />

				<input type="file" id="DisplayImage" />
				<label htmlFor="DisplayImage">
					<AccountCircleIcon color="primary" />
					<p>Upload a display picture</p>
				</label>

				<button>Sign Up</button>
				<p>
					Already have an account?{' '}
					<a className="Link" href="/signin">
						Sign In
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
