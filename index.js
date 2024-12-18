import express from "express";
import { router } from "./api.js";

// Express App
const app = express();

// CORS middleware
app.use(corsMiddleware);


// Public folder
app.use(express.static("public"));

// API
app.use("/api", router);

// Not found
app.use((req, res) => {
  res.redirect("/");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});



function corsMiddleware(req, res, next) {
  // Set allowed origin, you can restrict to a specific domain instead of '*'
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Set allowed methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  
  // Set allowed headers
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Allow credentials (set to true if necessary, but remember not to use '*' in Allow-Origin in that case)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight (OPTIONS) request
  if (req.method === 'OPTIONS') {
    // Respond with status 204 (No Content)
    return res.status(204).end();
  }

  // Proceed to the next middleware
  next();
}
