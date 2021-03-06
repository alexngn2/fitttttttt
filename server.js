//dependencies
const express = require("express");
const apiRoutes = require("");
const htmlRoutes = require("");
const app = express();

//set up initial port
const PORT = process.env.PORT || 8080;
//const PORT = 8080
//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Allows app to provide static files from dir
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//routing

//start server listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});