import Header from "../components/Header"
import { motion, AnimatePresence } from "framer-motion"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="main-picture"></div>
      <div className="main">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  )
}
