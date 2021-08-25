<<<<<<< HEAD
=======
//		that way we can use it EVERYWHERE in our server
require("dotenv").config();
const jwt = require('jsonwebtoken');
const port = 8000;

>>>>>>> e70b2df8ff3cfc7372a8d7886ea0922ef122da66
// import express and other libraries
const express = require('express');
const app = express();
const cors = require('cors');
<<<<<<< HEAD
=======
const cookieParser = require('cookie-parser');
>>>>>>> e70b2df8ff3cfc7372a8d7886ea0922ef122da66

// configure express app server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
<<<<<<< HEAD
	origin: "http://localhost:3000"
}))

// // configure mongoose to connect
// require('./config/mongoose.config');

// // add routes to listen
// const petsRoutes = require('./routes/pets.routes');
// petsRoutes(app);  // run the routes function and pass in our app server

// // start the app server listening
// app.listen(8000, () => {
// 	console.log("The express app server is listening on port: " + 8000);
// })
=======
	// adding the ability to use credentials with cookies
	credentials: true,
	origin: "http://localhost:3000"
}));

// configure the server to accept and update cookies
app.use(cookieParser());

// configure mongoose to connect
require('./config/mongoose.config');

// add routes to listen
const routes = require('./routes/routes');
routes(app);  // run the routes function and pass in our app server

// start the app server listening
app.listen(port, () => {
	console.log("The express app server is listening on port: " + port );
})
>>>>>>> e70b2df8ff3cfc7372a8d7886ea0922ef122da66
