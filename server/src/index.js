// index.js

const express = require('express');
const router = require("./router");
const PORT = 1338;
const app = express();

//app.get('/', (req, res) => {
//    res.send('hello world')
//})

// Apply JSON parsing middleware
app.use(express.json());
// Apply router
app.use("/", router);

//app.listen(5000, (req, res) => {
//    console.log('listening on port 5000')
//})

// Serving app on defined PORT
app.listen(PORT, () => {
    console.log(`Express is running on port ${PORT}`);
  });

  
