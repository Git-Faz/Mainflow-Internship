import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import User from "./models/users.js";

configDotenv();

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("\nMongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

const findUsers = async () => {
    try {
        const users = await User.find({}).sort({salary: -1});
        console.log("\nAll users:", users);
    } catch (error) {
        console.error("Error retrieving users:", error);
    }
};

const deleteAllUsers = async () => {
    try {
        await User.deleteMany({});
        console.log("\nAll users deleted successfully");
    } catch (error) {
        console.error("Error deleting users:", error);
    }
};

const addSingleUser = async () => {
    try {
        const user = new User({
            name: "Fedora One",
            email: "fedora.one@example.com",
            password: "securepassword",
            profession: "developer",
            age: 18,
            salary: 50000,
        });
        await user.save();
        console.log("\nUser saved successfully");
    } catch (error) {
        console.error("Error saving user:", error);
    }
};

const insertManyUsers = async () => {
    try {
        const users = [
            {
                name: "Jason Bourne",
                email: "jason.bourne@example.com",
                password: "securepassword",
                profession: "developer",
                age: 23,
                salary: 65000,
            },
            {
                name: "John Wick",
                email: "john.wick@example.com",
                password: "securepassword",
                profession: "designer",
                age: 35,
                salary: 30000,
            },
            {
                name: "Ethan Hunt",
                email: "ethan.hunt@example.com",
                password: "securepassword",
                profession: "manager",
                age: 40,
                salary: 900000,
            },
        ];
        await User.insertMany(users);
        console.log("\nUsers saved successfully");
    } catch (error) {
        console.error("Error saving users:", error);
    }
};

const findUserByProf = async () => {
    try {
        const users = await User.find({ profession: "developer" });
        console.log("\nUsers with profession 'developer':", users);
    } catch (error) {
        console.error("Error retrieving users by profession:", error);
    }
};

const findUserByAge = async () => {
    try {
        const users = await User.find({ age: { $gte: 30 } });
        console.log("\nUsers with age 30 and above:", users);
    } catch (error) {
        console.error("Error retrieving users by age:", error);
    }
};

const updateSalary = async () => {
    try {
        const result = await User.updateMany(
            { profession: "developer" },
            { $inc: { salary: 5000 } }
        );
        console.log("\nSalaries updated successfully:", result);
    } catch (error) {
        console.error("Error updating salaries:", error);
    }
};

const runFunctions = async () => {
    await connectDB();

    const tasks = [
        findUsers,
        deleteAllUsers,
        addSingleUser,
        insertManyUsers,
        findUserByProf,
        findUserByAge,
        updateSalary,
        findUsers, //sort
    ];

    for (const task of tasks) {
        await task();
    }

    await mongoose.connection.close();
    console.log("\nDB connection closed");
};

runFunctions();