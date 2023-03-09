import express, { Request, Response } from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
