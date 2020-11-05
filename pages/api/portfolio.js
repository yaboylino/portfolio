import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
  __internal: {
    useUds: true
  }
})

export default async (req, res) => {
  const clients = await prisma.portfolio.findMany()
  console.log(clients)
  res.json({ clients })
}
