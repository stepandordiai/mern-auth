import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ user, error }) => {
	return (
		<div>
			<div>{error && <p>{error}</p>}</div>
			{user ? (
				<div>
					<h2>Welcome {user.username}!</h2>
					<p>Email: {user.email}</p>
				</div>
			) : (
				<div>
					<h2>Welcome!</h2>
					<p>Please login or register!</p>
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/register">Register</NavLink>
				</div>
			)}
		</div>
	);
};

export default Home;
