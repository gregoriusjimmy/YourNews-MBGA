import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { RecommendedArticleSection } from '@/components/modules/RecommendedArticleSesction'
import { TopArticleSection } from '@/components/modules/TopArticleSection'

import { TGetTopHeadlinesRes } from '@/common/type'

export const ViewHome = () => {
  const { error, data } = useQuery<TGetTopHeadlinesRes>(
    ['homeTopHeadlines'],
    () => axios.get('top-headlines').then((res) => res.data)
  )

  if (error) return <h1>Sorry, Something when wrong</h1>

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
