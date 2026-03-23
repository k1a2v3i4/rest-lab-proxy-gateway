const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

// Forward /courses request to server1
app.get("/courses", async (req, res) => {
  const data = await fetch("http://localhost:3000/courses");
  const json = await data.json();
  res.json(json);
});

// Forward /users request to server2
app.get("/users", async (req, res) => {
  const data = await fetch("http://localhost:3001/users");
  const json = await data.json();
  res.json(json);
});

app.listen(4000, () => console.log("Proxy running on port 4000"));