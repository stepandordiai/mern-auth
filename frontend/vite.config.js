import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	// TODO:
	server: {
		proxy: {
			"/api": {
				target:
					"https://mern-login-logout-565e.onrender.com" ||
					"http://localhost:3000",
			},
		},
	},
});
