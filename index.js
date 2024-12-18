import express from "express";

const app = express();

// Public folder
app.use(express.static("public"));

// API
app.get("/api/currencies", (_, res) => {
  res.send("<h1>WIP</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
