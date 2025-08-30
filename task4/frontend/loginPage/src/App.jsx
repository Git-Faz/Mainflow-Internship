import { useState } from "react";
import axios from "axios";

const App = () => {
    const [_details, setDetails] = useState({ username: "", password: "" });

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        // Validate input
        if (formData.username.length < 3) {
            console.error("Username must be at least 3 characters long");
            return;
        }

        if (formData.password.length < 8) {
            console.error("Password must be at least 8 characters long");
            return;
        }

        try {
            console.log("Logging in with:", formData);
            const response = await axios.post(
                "http://localhost:3000/login",
                formData
            );
            console.log("Login successful:", response.data);
            setDetails(formData); // Update state after successful login
        } catch (error) {
            console.error(
                "Login failed:",
                error.response?.data?.message || error.message
            );
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default App;
