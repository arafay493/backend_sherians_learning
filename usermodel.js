import mongoose from "mongoose";

// Connect to MongoDB

mongoose
  .connect("mongodb://localhost:27017/mongopractice")
  .then(() => console.log("Connected to MongoDB"));

// Create a schema for the "user" collection

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  //   address: {
  //     street: String,
  //     city: String,
  //     state: String,
  //     zipCode: String,
  //   },
  //   hobbies: [String],
});

export const User = mongoose.model("User", userSchema);
