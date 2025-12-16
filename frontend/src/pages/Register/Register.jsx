import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import "./Register.scss";

const Register = ({ setUser }) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		// TODO:
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"https://mern-login-logout-565e.onrender.com/api/users/register",
				formData
			);
			localStorage.setItem("token", res.data.token);
			setUser(res.data);
			console.log(res.data);
			navigate("/");
		} catch (error) {
			setError(error);
		}
	};

	return (
		<div className="register">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
				<h1 style={{ fontSize: "2rem", marginBottom: 20 }}>
					Create an account
				</h1>
				{error && <p>{error}</p>}
				{/* TODO: */}
				<form action="" onSubmit={handleSubmit}>
					<div className="input-container">
						<label htmlFor="username">Username</label>
						<input
							id="username"
							className="input"
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							placeholder="Enter your username"
							required
							// TODO:
							autoComplete="off"
						/>
					</div>
					<div className="input-container">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							className="input"
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
							// TODO:
							autoComplete="off"
						/>
					</div>
					<div className="input-container">
						<label htmlFor="password">Password</label>
						<input
							className="input"
							id="password"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							required
						/>
					</div>
					<button className="register__btn">Register</button>
				</form>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<span className="login-line"></span>
					<span style={{ marginBottom: 10 }}>Already have an account?</span>
					<NavLink style={{ textDecoration: "underline" }} to="/login">
						Log in
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Register;
