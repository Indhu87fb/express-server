const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("hello");
});
app.get("/profile", (request, response) => {
  response.send("profile page");
});
const server = app.listen("8080", () => {
  // console.log("server running on port "+server.address().port+".");
  console.log(`server running on port:${server.address().port}.`);
});
