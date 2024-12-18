import express from "express";
import { router } from "./api.js";

const app = express();

// Public folder
app.use(express.static("public"));

// API
app.use("/api", router);

// Not found
app.use((req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
