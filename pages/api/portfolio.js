import portfolio from "../../data/portfolio"

export default async (req, res) => {
  const clients = portfolio
  console.log(clients)
  res.json({ clients })
}
