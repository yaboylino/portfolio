import Layout from "../components/Layout"
import Head from "next/head"
import Form from "../components/Form"
import { motion } from "framer-motion"

const contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1.5 }}>
        <div className="contact">
          <motion.div initial={{ translateX: 50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}>
            <h1>CONTACT ME</h1>
            <h3>LIONEL LORD</h3>
          </motion.div>
          <p>If you’d like to talk about a project, our work or anything else then get in touch.</p>
          <br />
          <h6>
            <span>Phone: </span>+31640547248
          </h6>
          <h6>
            <span>Mail: </span>info@lionellord.nl
          </h6>
          <h6>
            <span>Address: </span>De Deckerestraat 26, 4388 HX Oost-Souburg, Netherland
          </h6>
        </div>
        <div className="services">
          <motion.div initial={{ translateX: 50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}>
            <h2>SEND A MESSAGE</h2>
            <h3>FORM</h3>
            <Form />
          </motion.div>
          <div className="service-boxes"></div>
        </div>
        <div className="copyright">
          <p>© Lionel Lord | All Rights Reserved.</p>
        </div>
      </motion.div>
    </Layout>
  )
}

export default contact
