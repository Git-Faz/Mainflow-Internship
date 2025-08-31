import { useState } from "react";
import axios from "axios";

const App = () => {
    const [_details, setDetails] = useState({ username: "", password: "" });
    const [msg, setMsg] = useState({ error: "", success: "" });

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        // Validate input
        if (formData.username.length < 3) {
            console.error("Username must be at least 3 characters long");
            setMsg({ ...msg, error: "Username must be at least 3 characters long" });
            setTimeout(() => {
                setMsg({ error: "", success: "" });
            }, 2000);
            return;
        }

        if (formData.password.length < 8) {
            console.error("Password must be at least 8 characters long");
            setMsg({ ...msg, error: "Password must be at least 8 characters long" });
            setTimeout(() => {
                setMsg({ error: "", success: "" });
            }, 2000);
            return;
        }

        try {
            console.log("Logging in with:", formData);
            const response = await axios.post(
                "http://localhost:3000/login",
                formData
            );
            console.log("Login successful:", response.data);
            setMsg({ error: "", success: "Login successful!" });
            setTimeout(() => {
                setMsg({ error: "", success: "" });
            }, 2000);
            setDetails(formData);
        } catch (error) {
            console.error(
                "Login failed:",
                error.response?.data?.message || error.message
            );
            setMsg({ error: error.response?.data?.message || error.message, success: "" });
            setTimeout(() => {
                setMsg({ error: "", success: "" });
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                
                <div className="min-h-[3rem] mb-4">
                    {msg.error && (
                        <p className="p-3 bg-red-100 text-red-700 border border-red-300 rounded">
                            {msg.error}
                        </p>
                    )}
                    {msg.success && (
                        <p className="p-3 bg-green-100 text-green-700 border border-green-300 rounded">
                            {msg.success}
                        </p>
                    )}
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200 cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default App;
