/* Here, you’ll define the app’s endpoints and make the 
connection with Amadeus Node SDK:
 */

const { API_KEY, API_SECRET } = require("./config");
const Amadeus = require("amadeus");
const express = require("express");
// Create router
const router = express.Router();
// ...
module.exports = router;

/* At the beginning of the router.js file, you should 
import the necessary modules, including environment 
variables from config.js, and create a router instance. */


// Create Amadeus API client
const amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET,
});