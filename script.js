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

//? *********************************EJS, Dynamic routing, Initializing project | Part 6 - Backend Development



import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to our website!",
  });
  // res.sendFile(__dirname + '/views/home.ejs');
  // res.send("Welcome to our website!");
});

app.get('/profile/:username',(req, res) => {
    res.send("Chal Rha he " + req.params.username)
})

app.get('/profile/:username/:age',(req, res) => {
    res.send("Age " + req.params.age)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
