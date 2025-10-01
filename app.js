// Basic server setup
import express from "express";
import userRoutes from "./routes/userRoutes.js";
const app = express();

const PORT = 4000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

//ALL USERS CREATE IN APP JS

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
