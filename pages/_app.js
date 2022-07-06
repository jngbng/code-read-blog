import 'nextra-theme-blog/style.css'
import "@code-hike/mdx/dist/index.css"
import Head from 'next/head'

import '../styles/main.css'

function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  return getLayout(
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Nextra
