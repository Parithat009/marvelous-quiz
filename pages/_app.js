import '../styles/globals.css'
import { Context } from '../hook/context'

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
