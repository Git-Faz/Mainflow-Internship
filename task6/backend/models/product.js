import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 2,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        minlength: 3,
    },
    brand: {
        type: String,
        required: true,
        minlength: 2,
    },
});

export default mongoose.model("Products", productSchema);
