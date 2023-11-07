// Create web server and listen to port 3000
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Create a new comment
app.post("/comments", (req, res) => {
  console.log("req.body: ", req.body);
  res.send("OK");
});

// Start web server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});