import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/");
	};

	return (
		<nav>
			<div>
				<NavLink to="/">Home</NavLink>
			</div>
			<div>
				{user ? (
					<button onClick={handleLogout}>Log out</button>
				) : (
					<>
						<NavLink to="/login">Login</NavLink>
						<NavLink to="/register">Register</NavLink>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
