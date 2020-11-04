import Link from "next/link"
import { useRef } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

const Header = () => {
  const router = useRouter()
  const home = useRef(null)
  return (
    <motion.nav initial={{ translateX: 50, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ ease: [0.61, 1, 0.88, 1], duration: 1 }}>
      <ul ref={home} className="nav-menu">
        <li className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={`nav-link ${router.pathname === "/portfolio" ? "active" : ""}`}>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className={`nav-link ${router.pathname === "/contact" ? "active" : ""}`}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Header
