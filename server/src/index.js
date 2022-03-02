/* The index.js file will serve as an entry point for 
the app. In it, you’ll initialize the Express server 
with the following code:
 */

const express = require("express");
const router = require("./router");
const PORT = 1338;
const app = express();
// Apply JSON parsing middleware
app.use(express.json());
// Apply router
app.use("/", router);
// Serving app on defined PORT
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});

/* Import the required modules, set the app’s port, 
and create an Express app with a router attached, 
ending with a listen() call to start the server. */