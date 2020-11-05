import Layout from "../components/Layout"
import Head from "next/head"

const portfolio = data => {
  const clients = data.data.clients
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="about">
        <h1>PORTFOLIO</h1>
        <h3>LIONEL LORD</h3>
      </div>
      {clients.map(x => (
        <div key={x.id}>
          <h1>{x.name}</h1>
          <h3>{x.url}</h3>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://lionellord.nl/api/portfolio`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default portfolio
