const express = require("express");
const app = express();
const port = 3000; // You can change the port if needed

app.get("/", (req, res) => {
  res.send("Hello, Dockers");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
