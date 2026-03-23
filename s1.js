const express = require("express");
const app = express();
app.get("/courses", (req, res) => {
  res.json([
    { id: 1, name: "Excel Course" },
    { id: 2, name: "Java Course" },
  ]);
});
app.listen(3000, () => console.log("Server 1 running on port 3000"));