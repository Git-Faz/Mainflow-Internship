import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [details, setDetails] = useState({ username: "", password: "" });

    const handleLogin = (e) => {
        e.preventDefault();
        setDetails({
            username: e.target.username.value,
            password: e.target.password.value,
        });
        console.log(details);
    };

    useEffect(() => {

        if (details.username.length < 3) {
            console.error("Username must be at least 3 characters long");
            return;
        }

        if (details.password.length < 8) {
            console.error("Password must be at least 8 characters long");
            return;
        }

        if (details.username && details.password) {
            console.log("Logging in with:", details);
            axios.post("http://localhost:5000/login", details)
                .then((response) => {
                    console.log("Login successful:", response.data);
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                });
        }
    }, [details]);
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default App;
