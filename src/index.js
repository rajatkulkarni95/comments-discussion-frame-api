import express from "express";
import v1Routes from "./routes/api/v1/index.js";

const app = express();

app.use(express.json());
app.use("/api/v1", v1Routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
