import Head from "next/head"
import Layout from "../components/Layout"
import { motion } from "framer-motion"
import services from "../misc/icons"
import { useAuth } from "../auth"

export default function Home() {
  const { user } = useAuth()

  return (
    <Layout>
      <Head>
        <title>Freelance webdeveloper & webdesigner | Lionel Lord</title>
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1.5 }}>
        <div className="about">
          <motion.div initial={{ translateX: 50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}>
            <h1>WEB DEVELOPER</h1>
            <h3>LIONEL LORD</h3>
          </motion.div>
          <p>Building smart websites and web applications for organizations that want to take steps in digital transformation, that's what I like to do. As an independent web developer I apply my experience as a product and unit manager to build the ultimate website or web application, matching the needs of customers and users.</p>
        </div>
        <div className="services">
          <motion.div initial={{ translateX: 50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}>
            <h2>WHAT I DO</h2>
            <h3>SERVICES</h3>
          </motion.div>
          <div className="service-boxes">
            {services.map(x => (
              <div key={x.title} className="service-box">
                <motion.img whileHover={{ scale: 1.2 }} src={`${x.icon}`} alt="" />
                <h5>{x.title}</h5>
                <p>{x.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="copyright">
          <p>© Lionel Lord | All Rights Reserved.</p>
        </div>
      </motion.div>
    </Layout>
  )
}
