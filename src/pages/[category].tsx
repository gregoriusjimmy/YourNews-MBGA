import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

import { ViewCategory } from '@/domain/category/ViewCategory'

export default function Category() {
  return (
    <Layout>
      <Seo />
      <ViewCategory />
    </Layout>
  )
}
