import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/dynamicData");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
})

export const User = mongoose.model("User", userSchema);