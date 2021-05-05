import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'
import '../styles/globals.css'
import { Context } from '../hook/context'

const renderer = createRenderer()

function MyApp({ Component, pageProps }) {
  return (
    <RendererProvider renderer={renderer}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </RendererProvider>
  )
}

export default MyApp
