import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/miniproject")
  .then((res) => console.log("> Connected to the database..."))
  .catch((err) =>
    console.log(`> Error while connecting to mongoDB : ${err.message}`)
  );
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

//Export the model
export const User = mongoose.model("User", userSchema);
