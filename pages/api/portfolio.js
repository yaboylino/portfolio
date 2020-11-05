import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    await prisma.$connect
    const clients = await prisma.portfolio.findMany()
    res.status(200)
    res.json({ clients })
  } catch (e) {
    res.status(500)
    res.json({ error: "Unable to fetch portfolio" })
  } finally {
    await prisma.$disconnect()
  }
}
