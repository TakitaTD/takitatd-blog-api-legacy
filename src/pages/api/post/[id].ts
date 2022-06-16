// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let post: any = await await prisma.post.findUnique({
    where: { id: req.query.id.toString() },
  });
  if (post == null) {
    post = {
      authorId: "0",
      content: "Not Found",
      description: "",
      id: "0",
      published: false,
      title: "404 - Not Found",
    };
  }
  res.status(200).json(post);
}
