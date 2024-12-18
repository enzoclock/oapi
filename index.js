import { resolve } from "node:path";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  path
  res.sendFile(resolve(import.meta.dirname, "index.html"));
});

app.get("/currencies", (_, res) => {
  res.send("<h1>WIP</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
