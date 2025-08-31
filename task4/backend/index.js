import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import Users from "./models/user.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

configDotenv();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

// Connect to MongoDB once and keep connection open
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
}

/* try {
    await Users.deleteMany({});
    console.log(`All users deleted`);
} catch (error) {
    console.error("Error deleting users:", error);
} */
const hasUser = await Users.findOne();
if (!hasUser) {
    console.log(`No users found, Inserting Users`);
    
    try {
        const users = [
            {
                username: "user1",
                email: "user1@example.com",
                password: "password1",
            },
            {
                username: "user2",
                email: "user2@example.com",
                password: "password2",
            },
            {
                username: "user3",
                email: "user3@example.com",
                password: "password3",
            },
        ];
        const saltRounds = 10;
        const hashedUsers = await Promise.all(
            users.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, saltRounds)
            }))
        );

        await Users.insertMany(hashedUsers);
        console.log("Users inserted successfully");
    } catch (error) {
        console.error("Error inserting users:", error);
        process.exit(1);
    }
} else {
    console.log("Users already exist");
}
// Define routes at application level
app.post("/login", async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // Find user by username or email
        const user = await Users.findOne({
            $or: [{ username: username }, { email: email }],
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("\tDatabase connection closed");
    process.exit(0);
});
