import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import Users from '../models/user.js';
import Products from '../models/product.js';
import { usersData, productsData } from "./data.js";

configDotenv();

const db_url = process.env.MONGO_URI;

const seedUsers = async () => {
    try {
        await mongoose.connect(db_url);
        console.log('MongoDB connected for seeding');

        await Users.deleteMany({});
        console.log('Existing users removed');

        await Users.insertMany(usersData);
        console.log('Users seeded successfully');

        mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error seeding users:', error);
        mongoose.connection.close();
    }
};

const seedProducts = async () => {
    try {
        await mongoose.connect(db_url);
        console.log('MongoDB connected for seeding');

        await Products.deleteMany({});
        console.log('Existing products removed');

        await Products.insertMany(productsData);
        console.log('Products seeded successfully');

        mongoose.connection.close();
        console.log('MongoDB connection closed');
        process.exit();
    }
    catch (error) {
        console.error('Error seeding products:', error);
        mongoose.connection.close();
    }
}
//seedUsers();
seedProducts();
