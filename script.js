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

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { User } from "./models/user.js";

// Get the current directory using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "User List",
    message: "This is a Home page",
    users: [],
  });
});

app.get("/read", async (req, res) => {
  const AllUsers = await User.find();
  res.render("read", {
    title: "User List",
    message: "This is a Home page",
    users: AllUsers,
  });
});

app.post("/create", async (req, res) => {
  const { name, email, image } = req.body;
  let createdUser = await User.create({ name, email, image });
  // res.send(createdUser);
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/edit/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.render("edit", { user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const { name, email, image } = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        email,
        image,
      },
      {
        new: true,
      }
    );
    res.redirect("/read");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
