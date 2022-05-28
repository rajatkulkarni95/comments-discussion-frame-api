import { Router } from "express";
import comments from "./comments/index.js";
import users from "./users/index.js";

const routes = Router();

routes.use("/comments", comments);
routes.use("/users", users);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

export default routes;
