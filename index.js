import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./index.js");
});

app.get("/welcome", (_, res) => {
  res.send("<h1>Welcome</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
