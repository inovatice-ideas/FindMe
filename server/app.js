const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const mongoose = require('mongoose');
const app = express();

const user = require('./routes/user');


app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "findme-session",
    keys: ["COOKIE_SECRET"], // should use as secret environment variable
    httpOnly: true
  })
);



mongoose.connect('mongodb+srv://ritampradhan2002:ritam123@cluster.1wwl2se.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to findme application." });
});
app.use('/', user)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});