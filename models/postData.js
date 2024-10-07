import mongoose from "mongoose";
// mongoose
//   .connect("mongodb://localhost:27017/dataAssociation")
//   .then((res) => console.log("> Connected..."))
//   .catch((err) =>
//     console.log(`> Error while connecting to mongoDB : ${err.message}`)
//   );

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema({
  postData: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // This refers to the User model
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

//Export the model
export const Post = mongoose.model("Post", postSchema);
