import Layout from '@/components/layout/Layout'
import Seo from '@/components/Seo'

import { ViewArticle } from '@/domain/article/ViewArticle'

export default function ArticlePage() {
  return (
    <Layout>
      <Seo />
      <ViewArticle />
    </Layout>
  )
}
