const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Server Running successfully" });
});

app.listen(6969, () => {
  console.log("Server running at port 6969");
});
