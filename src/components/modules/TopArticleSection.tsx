import { useContext } from 'react'

import { TArticle } from '@/common/type'
import { ArticleContext } from '@/context/ArticleContext'

import { ArticleCard } from '../cards/ArticleCard'
import UnstyledLink from '../links/UnstyledLink'
import Skeleton from '../Skeleton'

export const TopArticleSection = ({ articles }: { articles?: TArticle[] }) => {
  const { setArticle } = useContext(ArticleContext)
  return (
    <div className='flex w-full flex-col lg:h-[80vh] lg:max-h-[500px] lg:flex-row'>
      {/* FIRST ARTICLE */}
      {!articles ? (
        <Skeleton className='h-full w-full lg:w-[60%]' />
      ) : (
        <UnstyledLink
          className='h-[300px] lg:h-full lg:w-[60%]'
          href='/article'
          onClick={() => setArticle(articles[0])}
        >
          <ArticleCard className='h-full w-full' article={articles[0]} />
        </UnstyledLink>
      )}
      {/* SECOND AND THIRD ARTICLE */}
      <div className='mt-7 flex flex-row justify-between lg:mt-0 lg:ml-8 lg:w-[40%] lg:flex-col'>
        {!articles && (
          <>
            <Skeleton className='mr-8 h-[250px] w-[48%] lg:mr-0 lg:mb-8 lg:h-[47%] lg:w-full' />
            <Skeleton className='h-[250px] w-[48%] lg:h-[47%] lg:w-full' />
          </>
        )}
        {articles?.slice(1, 3).map((article, idx) => (
          <UnstyledLink
            key={idx}
            className='h-[250px] w-[48%] lg:h-[47%] lg:w-full'
            href='/article'
            onClick={() => setArticle(article)}
          >
            <ArticleCard
              className='h-full w-full'
              article={article}
              small
              truncateText
            />
          </UnstyledLink>
        ))}
      </div>
    </div>
  )
}
