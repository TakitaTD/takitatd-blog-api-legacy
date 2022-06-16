// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let user: any = await await prisma.user.findUnique({
    where: { id: req.query.id.toString() },
  });
  if (user == null) {
    user = {
      email: "0@0.com",
      createdAt: "1970-01-01",
      id: 0,
      name: "0",
      updatedAt: "1970-01-01",
    };
  }
  res.status(200).json(user);
}
