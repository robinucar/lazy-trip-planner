// require express
const express = require("express");
// require express layout for view
const expressLayouts = require("express-ejs-layouts");
// require mongoose
const mongoose = require("mongoose");

//require flash
const flash = require('connect-flash');

//require express session
const session = require('express-session');

const app = express();

//passport config
const passport = require('passport')
require('./config/passport')(passport)

// DB Config

const db = require("./config/keys").MongoURL;

// Connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// EJS

app.use(expressLayouts);
app.set("view engine", "ejs");

//Body parser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);
//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//connect flash
app.use(flash())

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// call index routes

app.use("/", require("./routes/index"));

// call users routes

app.use("/users", require("./routes/users"));

// setup port

const PORT = process.env.PORT || 5000;

// listen port
app.listen(PORT, console.log(`server start on port ${PORT}`));
