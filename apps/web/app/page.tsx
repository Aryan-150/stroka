import { prisma } from "@repo/db/client";

export default async function Home() {
  const users = await prisma.user.findMany({});

  return <div>
    hii there <br />
    {JSON.stringify(users) ? JSON.stringify(users) : "no users yet"}
  </div>
}