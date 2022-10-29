import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

import { ViewHome } from '@/domain/home/ViewHome'

export default function Home() {
  return (
    <Layout>
      <Seo />
      <ViewHome />
    </Layout>
  )
}
