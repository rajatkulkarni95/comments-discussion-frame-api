import { Router } from "express";
import { prisma } from "../../../../lib/prisma.js";

const routes = Router();

routes.get("/", async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      comments: true,
    },
  });
  res.status(200).json(users);
});

routes.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.status(201).json(user);
});

export default routes;
