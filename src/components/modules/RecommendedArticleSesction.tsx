import { useContext } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { TArticle } from '@/common/type'
import { ArticleContext } from '@/context/ArticleContext'
import { truncate } from '@/utils/common'

import UnstyledLink from '../links/UnstyledLink'
import NextImage from '../NextImage'
import Skeleton from '../Skeleton'

export const RecommendedArticleSection = ({
  articles,
}: {
  articles?: TArticle[]
}) => {
  const isSm = useMediaQuery('(min-width: 640px)')
  const { setArticle } = useContext(ArticleContext)

  return articles ? (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      slidesPerView='auto'
      grabCursor
      breakpoints={{
        '480': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {articles.map((article, idx) => (
        <SwiperSlide key={idx} className='w-full'>
          <UnstyledLink href='/article' onClick={() => setArticle(article)}>
            <div className='h-[300px]'>
              <NextImage
                imageClass='rounded'
                className='relative h-[60%]'
                fill
                src={article.urlToImage || '/placeholder.jpg'}
                alt={article.title}
              />
              <div className='py-4 px-1'>
                <h3 className='sm:h4  text-black'>
                  {isSm ? truncate(article.title) : truncate(article.title, 70)}
                </h3>
              </div>
            </div>
          </UnstyledLink>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <Skeleton className='h-[300px] w-full' />
  )
}
