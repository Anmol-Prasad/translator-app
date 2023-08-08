import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes.js";
import Connection from "./Connection.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const username = process.env.username;
const password = process.env.password;
Connection(username, password);

app.post("/tobraille", routes);
app.post("/tosign", routes);

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.log("Error in establishing connection");
  }
  console.log(`Connected successfully to port ${port}`);
});
