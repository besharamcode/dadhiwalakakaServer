import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import { connectDB } from "./helper/db.js";


const app = express();
connectDB();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
