import mongoose from "mongoose";

// Connect MongoDB at default port 27017.
mongoose
  .connect("mongodb://localhost:27017/authtestapp")
  .then(() => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((err) => {
    console.log("Error in DB connection: " + err);
  });

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
  // mobile:{
  //     type:String,
  //     required:true,
  //     unique:true,
  // },
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
export const UserModel = mongoose.model("UserModel", userSchema);
