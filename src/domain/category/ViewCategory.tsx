import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'

import { RecommendedArticleSection } from '@/components/modules/RecommendedArticleSesction'
import { TopArticleSection } from '@/components/modules/TopArticleSection'

import { TGetTopHeadlinesRes } from '@/common/type'

export const ViewCategory = () => {
  const router = useRouter()
  const { category } = router.query

  const { error, data } = useQuery<TGetTopHeadlinesRes>(
    [`${category}TopHeadlines`],
    () =>
      axios.get(`top-headlines?category=${category}`).then((res) => res.data)
  )

  if (error || !category) return <h1>Sorry, Something when wrong</h1>

  return (
    <div className='layout'>
      <TopArticleSection articles={data?.articles} />
      <div className='mt-8'>
        <h3 className='mb-4 font-bold text-primary-500'>Recommended for you</h3>
        <RecommendedArticleSection articles={data?.articles.slice(3)} />
      </div>
    </div>
  )
}
