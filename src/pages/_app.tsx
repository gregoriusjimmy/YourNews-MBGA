import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import moment from 'moment'
import type { AppProps } from 'next/app'
import '../configs/axiosConfig'
import 'swiper/css/bundle'
import 'moment/locale/id'
moment.locale('id')

import '@/styles/globals.css'

import { ArticleProvider } from '@/context/ArticleContext'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ArticleProvider>
        <Component {...pageProps} />
      </ArticleProvider>
    </QueryClientProvider>
  )
}
