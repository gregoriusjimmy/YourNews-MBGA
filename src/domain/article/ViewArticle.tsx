import moment from 'moment'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import ArrowLink from '@/components/links/ArrowLink'
import NextImage from '@/components/NextImage'

import { ArticleContext } from '@/context/ArticleContext'

export const ViewArticle = () => {
  const { article } = useContext(ArticleContext)

  const router = useRouter()

  useEffect(() => {
    if (!article) {
      router.push('/')
    }
  }, [article, router])

  if (!article) {
    return (
      <div>
        <h1>Error 404</h1>
      </div>
    )
  }

  return (
    <div className='layout'>
      <NextImage
        className='relative h-[200px] w-full md:h-[400px]'
        fill
        src={article.urlToImage || '/placeholder.jpg'}
        alt={article.title}
      />
      <h1 className='my-4 md:my-8'>{article.title}</h1>
      <div className='mb-4 flex justify-between'>
        <h3 className='text-gray-500'>{article.author}</h3>
        <h3 className='text-gray-500'>
          {moment(article.publishedAt).format('DD-MM-YYYY')}
        </h3>
      </div>
      <p>{article.content}</p>
      <ArrowLink className='my-8' href={article.url} openNewTab>
        Source
      </ArrowLink>
    </div>
  )
}
