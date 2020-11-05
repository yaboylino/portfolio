import Layout from "../components/Layout"
import Head from "next/head"

function portfolio(data) {
  const port = data.data.clients
  console.log(port)
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="about">
        <h1>PORTFOLIO</h1>
        <h3>LIONEL LORD</h3>
      </div>
      {port.map(x => (
        <div key={x.id}>
          <h1>{x.name}</h1>
        </div>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/portfolio`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default portfolio
