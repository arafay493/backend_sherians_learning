// import express from 'express';
// const app = express();
// const PORT = 8000

// app.use(express.json())
// app.use(express.urlencoded({
//     extended: true  // to parse URL encoded data (like form-data) into req.body object
// }))

// // Middleware 1

// function middleware1(req, res, next) {
//     console.log('Middleware 1 is running...');
//     next();
// }

// // Middleware 2

// function middleware2(req, res, next) {
//     console.log('Middleware 2 is running...');
//     next();
// }

// // Middleware 3

// function middleware3(err , req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something Broke!')
// }

// app.get('/', (req, res) => {
//     res.send('Hello I am Learning Middlewares');
// })

// app.get('/about', (req, res) => {
//     res.send('Ye Abunt ka page he');
// })

// app.get('/profile', (req, res, next) => {
//     return next(new Error('Something went wrong'));
// })

// app.use(middleware3);
// app.listen(PORT , () => {
//     console.log(`Server is running on port ${PORT}`);
// })

// //? *********************************EJS, Dynamic routing, Initializing project | Part 6 - Backend Development

// import express from "express";
// import path from "path";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const app = express();

// const PORT = process.env.PORT || 8000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "Home Page",
//     message: "Welcome to our website!",
//   });
//   // res.sendFile(__dirname + '/views/home.ejs');
//   // res.send("Welcome to our website!");
// });

// app.get('/profile/:username',(req, res) => {
//     res.send("Chal Rha he " + req.params.username)
// })

// app.get('/profile/:username/:age',(req, res) => {
//     res.send("Age " + req.params.age)
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//? ********************************* Learning Mongodb
// import express from "express";
// import { User } from "./usermodel.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/create", async (req, res) => {
//   const createdUser = await User.create({
//     name: "Izhan",
//     email: "izhan@example.com",
//     age: 30,
//   });

//   res.send(`User created: ${createdUser.name}`);
// });

// app.get("/update", async (req, res) => {
//   // const updatedUser = await User.findByIdAndUpdate(
//   //   "615684865d27065a32757441",
//   //   { age: 31 },
//   //   { new: true }
//   // );
//   const updatedUser = await User.findOneAndUpdate(
//     { _id: "66fc4d13192ed43014dcb729" },
//     { age: 50 },
//     { new: true }
//   );

//   res.json(`User updated: ${updatedUser}`);
// });

// app.get("/read", async (req, res) => {
//   let users = await User.find();
//   res.json(`Users List: ${users}`);
// });

// app.get("/readone", async (req, res) => {
//   let user = await User.findOne({ name: "Izhan" });
//   res.send(user);
// });

// app.get("/delete", async (req, res) => {
//   let user = await User.findOneAndDelete({ name: "Jhon Doe" });
//   res.send("User deleted: " + user);
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//? ********************************* Creating APIs ********************************
// import express from "express";
// import { User } from "./usermodel.js";
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/read", async (req, res) => {
//   let users = await User.find();
//   res.send(users);
// });

// app.get("/readone", async (req, res) => {
//   try {
//     let user = await User.findOne(req.query);

//     if (!user) {
//       throw new Error("User not found");
//     }

//     res.send(user);
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({ message: error.message });
//   }
// });

// app.post("/create", async (req, res) => {
//   console.log(req.body);
//   try {
//     const createdUser = await User.create(req.body);
//     res.send(req.body);
//     if (!createdUser) throw new Error("Something went wrong");
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).send({ message: error.message });
//   }
// });

// app.put("/update", async (req, res) => {
//   const updatedUser = await User.findOneAndUpdate(
//     { _id: req.query._id },
//     req.body,
//     { new: true }
//   );
//   res.send(updatedUser);
// });

// app.patch("/update", async (req, res) => {
//   const updatedUser = await User.findOneAndUpdate(
//     { _id: req.query._id },
//     req.body,
//     { new: true }
//   );
//   res.send(updatedUser);
// });

// app.delete("/delete", async (req, res) => {
//   let user = await User.findOneAndDelete({ _id: req.body._id });
//   res.send(user);
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//? ********************************* Creating APIs With Proper Error Handling ********************************
// import express from "express";
// import { User } from "./usermodel.js";
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/read", async (req, res) => {
//   let users = await User.find();
//   res.send(users);
// });

// app.get("/readone", async (req, res) => {
//   try {
//     if(!req.query.name) return res.send({ message : "Naam De"})
//     let user = await User.findOne(req.query);

//     if (!user) {
//       throw new Error("User not found");
//     }
//     res.send(user);
//   } catch (error) {
//     console.log(error.message);
//     res.status(404).send({ message: error.message });
//   }
// });

// app.post("/create", async (req, res) => {
//   console.log(req.body);
//   const {name , email, age} = req.body;
//   try {
//     const createdUser = await User.create(req.body);
//     res.send(req.body);
//     if (!createdUser) throw new Error("Something went wrong");
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).send({ message: error.message });
//   }
// });

// app.put("/update", async (req, res) => {
//   const updatedUser = await User.findOneAndUpdate(
//     { _id: req.query._id },
//     req.body,
//     { new: true }
//   );
//   res.send(updatedUser);
// });

// app.patch("/update", async (req, res) => {
//   const updatedUser = await User.findOneAndUpdate(
//     { _id: req.query._id },
//     req.body,
//     { new: true }
//   );
//   res.send(updatedUser);
// });

// app.delete("/delete", async (req, res) => {
//   let user = await User.findOneAndDelete({ _id: req.body._id });
//   res.send(user);
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//? ********************************* CRUD Operations with EJS and Server Side Rendering ********************************

// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// import { User } from "./models/user.js";

// // Get the current directory using ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.set("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index", {
//     title: "User List",
//     message: "This is a Home page",
//     users: [],
//   });
// });

// app.get("/read", async (req, res) => {
//   const AllUsers = await User.find();
//   res.render("read", {
//     title: "User List",
//     message: "This is a Home page",
//     users: AllUsers,
//   });
// });

// app.post("/create", async (req, res) => {
//   const { name, email, image } = req.body;
//   let createdUser = await User.create({ name, email, image });
//   // res.send(createdUser);
//   res.redirect("/read");
// });

// app.get("/delete/:id", async (req, res) => {
//   try {
//     await User.findOneAndDelete({ _id: req.params.id });
//     res.redirect("/read");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

// app.get("/edit/:id", async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.params.id });
//     res.render("edit", { user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

// app.post("/update/:id", async (req, res) => {
//   try {
//     const { name, email, image } = req.body;
//     const user = await User.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         name,
//         email,
//         image,
//       },
//       {
//         new: true,
//       }
//     );
//     res.redirect("/read");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

//? ********************************* Authentication , Authorization, Cookies , JWT, Bcrypt *******************************

// import cookieParser from "cookie-parser";
// import express from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const app = express();
// // require('dotenv').config()
// const port = process.env.PORT || 8000;

// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.cookie("name", "harsh");
//   res.send("Done :)");
// });

// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("Read Page :) " + req.cookies.name);
// });

// app.get("/password", (req, res) => {
//   //   //todo: Method 1
//   //   try {
//   //     bcrypt.genSalt(10, (err, salt) => {
//   //       if (err) throw err;
//   //       bcrypt.hash("password", salt, (err, hash) => {
//   //         if (err) throw err;
//   //         console.log("Password hashed : " + hash);
//   //         res.send("Password :) " + hash);
//   //       });
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }

//   //todo: Method 2
// //   try {
// //     const salt = 10;
// //     bcrypt.hash("password", salt, (err, hash) => {
// //       if (err) throw err;
// //       console.log("Password hashed : " + hash);
// //       res.send("Password :) " + hash);
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// });

// const loginUser = (plainPassword, hashedPassword) => {
//    bcrypt.compare(plainPassword, hashedPassword, (err, result) => {
//      if (err) throw err;
//      if (result) {
//        console.log("Password matches!");
//        // Login successful
//      } else {
//        console.log("Invalid password!");
//      }
//    });
//  };

// app.get("/password", async (req, res) => {
//   //todo: Method 3
//   const hash = await bcrypt.hash("password", 10);
//   try {
//     console.log("Password hashed: " + hash);
//     res.send("Password :) " + hash);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error hashing password");
//   } finally {
//     console.log("Finally function executed!");
//    //  const compare = bcrypt.compare("password" , hash);
//    //  console.log("Is password correct? : " + compare);
//    loginUser('myPassword123', hash); //* Invalid password
//    loginUser('password', hash); //* Password Matches!
//   }
// });

// app.get("/", function (req, res) {
//   const SECRET_KEY = process.env.SECRET_KEY || "password";

//   function Script(req, res, next) {
//     const authorization = req.headers.authorization;
//     if (!authorization) {
//       return res.status(401).json({
//         message: "No Authorization Header",
//       });
//     }
//     try {
//       const token = authorization.split("Bearer ")[1];
//       if (!token) {
//         return res.status(401).json({
//           message: "Invalid Token Format",
//         });
//       }
//       const decode = jwt.verify(token, SECRET_KEY);
//       req.user = decode;
//       next();
//     } catch (error) {
//       if (error instanceof jwt.TokenExpiredError) {
//         return res.status(401).json({
//           message: "Session Expired",
//           error: error.message,
//         });
//       }
//       if (
//         error instanceof jwt.JsonWebTokenError ||
//         error instanceof TokenError
//       ) {
//         return res.status(401).json({
//           message: "Invalid Token",
//           error: error.message,
//         });
//       }
//       res.status(500).json({
//         message: "Internal server Error",
//         error: error.message,
//         stack: error.stack,
//       });
//     }
//   }

//   module.exports = Script;
// });

// app.get("/", function (req, res) {
//   // Generate JWT token
//   const SECRET_KEY = process.env.SECRET_KEY || "password";
//   const user = { id: 1, name: "John Doe", email: "jhon@gmail.com" };
//   const token = jwt.sign(user, SECRET_KEY);
//   res.cookie("token", token);
//   res.send("Done");
// });

// app.get("/read", (req, res) => {
//   const SECRET_KEY = process.env.SECRET_KEY || "password";
//   const data = jwt.verify(req.cookies.token, SECRET_KEY);
//   res.send("Read Page :) " + data.email);
//   //   res.send("Read Page :) " + req.cookie.token);
// });

// app.listen(port, () =>
//   console.log("> Server is up and running on port : " + port)
// );

//? ********************************* Practical Example - Authentication , Authorization, Cookies , JWT, Bcrypt *******************************

// import express from "express";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { UserModel } from "./models/user.model.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import cors from "cors";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const app = express();
// // require("dotenv").config();
// const PORT = process.env.PORT || 8000;

// app.set("view engine", "ejs");
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(`${__dirname}/public`));
// app.get("/", (req, res) => {
//   // res.render("auth", {
//   //   title: "Home Page",
//   //   message: "Form Submitted",
//   //   // message: req.flash('message')
//   // });
//   res.send("Welcome");
// });

// app.post("/create", async (req, res) => {
//   try {
//     const { name, email, password, age } = req.body;
//     let createdUser = await UserModel.create({
//       name,
//       email,
//       password: await bcrypt.hash(password, 10), // * Method 2
//       age,
//       // password: bcrypt.hashSync(password, 10), // * Method 1
//       // password: bcrypt.hash(password, 10).then((hash) => hash), // * Method 3
//     });
//     let token = jwt.sign({ name, email, age }, "SECRET");
//     // Set the token in the cookie with proper options
//     // res.cookie("token", token, {
//     //   httpOnly: true, // Makes the cookie inaccessible to JavaScript
//     //   secure: false, // Set true only if you're using HTTPS
//     //   sameSite: "Lax", // Controls the cookie cross-site behavior
//     // });
//     res.cookie("token", token);
//     // res.cookie("token", token, { httpOnly: true });
//     // res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
//     res.send({ token: token });
//   } catch (error) {
//     res.status(500).send("Error creating user: " + error.message);
//   }
// });

// app.post("/logout", async (req, res) => {
//   try {
//     res.cookie("token", "");
//     res.send("logout successfully");
//   } catch (error) {
//     res.status(500).send("Error in logging out the user: " + error.message);
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await UserModel.findOne({ email });
//     if (!user) res.send({ message: "User Does not Exist" });
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) res.send({ message: "Invalid Password" });
//     let token = jwt.sign(
//       { name: user.name, email: user.email, age: user.age },
//       "SECRET"
//     );
//     res.cookie("token", token);
//     res.send({message: "login successfully"});
//   } catch (error) {
//     res.status(500).send("Error in logging in the user: " + error.message);
//   }
// });
// app.listen(PORT, () =>
//   console.log("> Server is up and running on port : " + PORT)
// );

//? ********************************* Data Association *******************************

// import express from "express";
// import { User } from "./models/userData.js";
// import { Post } from "./models/postData.js";
// const app = express();
// const port = process.env.PORT || 8000;
// app.get("/", (req, res) => {
//   res.send("hello from simple server :)");
// });

// app.get("/create", async (req, res) => {
//   //todo:
//   // const user = new User({
//   //   name: "John Doe",
//   //   email: "john@example.com",
//   //   age: 30,
//   // });

//   const user = await User.create({
//     name: "John",
//     email: "john@example.com",
//     age: 30,
//   });
//   res.send(user);
// });

// app.get("/post/create", async (req, res) => {
//   const post = await Post.create({
//     postData: "My First Post",
//     user: "67038f0c1e9802b58964820c", // Replace with actual user id
//   });

//   const user = await User.findOne({ _id: "67038f0c1e9802b58964820c" });
//   console.log(user);
//   user.posts.push(post._id);
//   await user.save();
//   res.send({ post, user });
//   // res.send("Post created successfully");
// });

// app.listen(port, () =>
//   console.log("> Server is up and running on port : " + port)
// );

//? ********************************* Data Association____Mini-Project *******************************

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models/Mini_Project/user.model.js";
import { Post } from "./models/Mini_Project/posts.model.js";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 8000;

//todo: Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cookieParser(),
//   async (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) return next();
//     try {
//       const decoded = jwt.verify(token, "SECRET_KEY");
//       req.user = decoded;
//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401).send({ message: "Invalid token" });
//     }
//   }
// )

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.post("/create", async (req, res) => {
  const { username, name, email, password, age } = req.body;
  const existingUser = await User.findOne({ email: email });
  console.log(existingUser);
  if (existingUser) {
    return res
      .status(409)
      .send({ message: "User with the same email already exists" });
  }

  try {
    const createdUser = await User.create({
      username,
      name,
      email,
      password: await bcrypt.hash(password, 10),
      age,
    });
    if (!createdUser) throw new Error("Error creating user");
    const token = await jwt.sign(
      { username, name, email, age },
      "SECRET_KEY"
      // { expiresIn: "1h" }
    );
    res.cookie("token", token);
    res.send({ token, createdUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating user" });
  }
  // const createdUser = await User.create(
  //   { username, name, email, password, age },
  //   (err, user) => {
  //     if (err) {
  //       console.error("Error creating user: ", err);
  //       res.status(500).send("Error creating user");
  //     } else {
  //       res.send(user);
  //     }
  //   }
  // );
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser)
      return res.status(403).send({ message: "User not found" });
    const match = await bcrypt.compare(password, existingUser.password);
    if (!match) return res.status(401).send({ message: "Invalid Password" });
    const token = await jwt.sign(
      { existingUser },
      "SECRET_KEY"
      // { expiresIn: "1h" }
    );
    res.cookie("token", token);
    res.send({ token, existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Login Failed" });
  }
});

app.post("/logout", async (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    res.send({ message: "Loggedout Successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Loggedout Failed" });
  }
});

// app.get("/profile", Authenticate, (req, res) => {
//   const user = req.user.existingUser;
//   console.log(user)
//   res.send({ message: "Welcome to Profile!", user: user });
// });

app.get("/profile", Authenticate, async (req, res) => {
  const { email } = req.user.existingUser;
  const user = await User.findOne({ email });
  const posts = await user.populate("posts");
  console.log(posts);
  res.send({ message: "Welcome to Profile!", user, posts });
});

// app.post("/profile", Authenticate, async (req, res) => {
//   const user = req.user.existingUser;
//   const { name, age } = req.body;
//   user.name = name;
//   user.age = age;
//   try {
//     await user.save();
//     res.send({ message: "Profile updated successfully!", user: user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Error updating profile" });
//   }
// });

app.post("/post", Authenticate, async (req, res) => {
  // const user = req.user.existingUser;
  const { content, email } = req.body;
  const user = await User.findOne({ email });
  const newPost = await Post.create({ content, user: user._id });
  user.posts.push(newPost._id);
  await user.save();
  res.send({ message: "Post created successfully!", newPost });
});

//todo: Middleware which can be used for protected routes
function Authenticate(req, res, next) {
  console.log(req.cookies.token);
  const token = req.cookies.token;
  if (!token) return res.status(401).send({ message: "Access Denied" });
  //todo: Method 1 of Authenticate
  // jwt.verify(token, "SECRET_KEY", (err, user) => {
  //   if (err) return res.status(403).send({ message: "Access Denied" });
  //   req.user = user;
  //   next();
  // });
  //todo: Method 2 of Authenticate
  const decoded = jwt.verify(token, "SECRET_KEY");
  if (!decoded) return res.status(403).send({ message: "Access Denied" });
  console.log(decoded);
  req.user = decoded;
  next();
}

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
