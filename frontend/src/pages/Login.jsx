import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
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
				"https://mern-login-logout-565e.onrender.com/api/users/login",
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
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
				<h2>Login</h2>
				{error && <p>{error}</p>}
				{/* TODO: */}
				<form action="" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="">Email</label>
						<input
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
					<div>
						<label htmlFor="">Password</label>
						<input
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							placeholder="Enter your password"
							required
						/>
					</div>
					<button>Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
