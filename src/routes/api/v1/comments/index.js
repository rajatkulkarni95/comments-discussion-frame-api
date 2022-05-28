import { Router } from "express";
import { prisma } from "../../../../lib/prisma.js";

const routes = Router();

routes.get("/", async (req, res) => {
  const comments = await prisma.comment.findMany({
    include: {
      user: true,
    },
  });
  res.status(200).json(comments);
});

routes.post("/", async (req, res) => {
  const { text, userId } = req.body;
  const comment = await prisma.comment.create({
    data: {
      text,
      createdBy: userId,
    },
  });
  res.status(201).json(comment);
});

export default routes;
