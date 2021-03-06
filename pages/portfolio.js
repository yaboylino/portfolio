import Layout from "../components/Layout"
import Head from "next/head"

const portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="about">
        <h1>PORTFOLIO</h1>
        <h3>LIONEL LORD</h3>
      </div>
      <h1 className="portfolio">Coming Soon</h1>
    </Layout>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/portfolio`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default portfolio
