import { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { globalStyles } from '../style/styles'


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  )
}
