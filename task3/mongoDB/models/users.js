import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18
  },
  salary: {
    type: Number,
    required: true
  }
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  }
});

const User0 = mongoose.model("User0", userSchema);
export default User0;
