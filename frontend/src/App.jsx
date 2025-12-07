import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";

function App() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	console.log(user);

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem("token");
			if (token) {
				try {
					const response = await axios.get("/api/users/me", {
						headers: { Authorization: `Bearer ${token}` },
					});
					setUser(response.data);
				} catch (error) {
					setError(error);
					localStorage.removeItem("token");
				}
			}
			setIsLoading(false);
		};

		fetchUser();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<Router>
			<Navbar user={user} setUser={setUser} />
			<Routes>
				<Route path="/" element={<Home user={user} error={error} />} />
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
				/>
				<Route
					path="/register"
					element={user ? <Navigate to="/" /> : <Register setUser={setUser} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
