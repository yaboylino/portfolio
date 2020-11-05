import "../styles/globals.css"
import { AuthProvider } from "../auth"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AnimatePresence>
  )
}

export default MyApp
