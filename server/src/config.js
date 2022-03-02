/* Environment variables will load atconfig.js, 
using the dotenv module:
 */
const dotenv = require("dotenv");
dotenv.config();
// Export env variables
module.exports = {
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,
};

/* Upon loading, the module is immediately used to load 
env variables with a .config() call. After that, 
the variables are available at process.env. */