import express from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/tobraille", routes);
app.post("/tosign", routes);

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.log("Error in establishing connection");
  }
  console.log(`Connected successfully to port ${port}`);
});
