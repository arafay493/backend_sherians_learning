import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/dataAssociation")
  .then((res) => console.log("> Connected to database..."))
  .catch((err) =>
    console.log(`> Error while connecting to mongoDB : ${err.message}`)
  );

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    unique: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

//Export the model
export const User = mongoose.model("User", userSchema);
