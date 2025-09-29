// Basic server setup
import express from "express";

const app = express();
const router = express.Router();
const PORT = 4000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

router.get("/users", (req, res) => {
  res.send("this is GET users");
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
