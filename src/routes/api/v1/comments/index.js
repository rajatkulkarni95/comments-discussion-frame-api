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

routes.put("/:id/upvote", async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await prisma.comment.update({
      where: { id },
      data: {
        upvoteCount: {
          increment: 1,
        },
      },
    });
    res.json(comment);
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
});

routes.put("/:id/downvote", async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await prisma.comment.update({
      where: { id },
      data: {
        upvoteCount: {
          decrement: 1,
        },
      },
    });
    res.json(comment);
  } catch (error) {
    res.json({ error: "Something went wrong" });
  }
});

export default routes;
