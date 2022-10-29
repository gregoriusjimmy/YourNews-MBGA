import moment from 'moment'

import clsxm from '@/lib/clsxm'

import NextImage from '@/components/NextImage'
import Skeleton from '@/components/Skeleton'

import { TArticle } from '@/common/type'
import { truncate } from '@/utils/common'

export const ArticleCard = ({
  article,
  className,
  small = false,
  truncateText = false,
}: {
  article?: TArticle
  className?: string
  small?: boolean
  truncateText?: boolean
}) => {
  return (
    <div className={clsxm('relative h-[300px] w-full', className)}>
      {!article && <Skeleton className='h-full w-full' />}
      {article && (
        <>
          <NextImage
            imageClass='rounded'
            className='absolute h-full w-full'
            fill
            src={article.urlToImage || '/placeholder.jpg'}
            alt={article.title}
          />
          <div
            className={clsxm(
              'absolute bottom-0 left-0 z-10 flex  w-full flex-col justify-between rounded-b bg-black/70 p-4',
              [small && 'min-h-[40%]']
            )}
          >
            <h4 className={clsxm('text-white', [small ? 'p' : 'h6'])}>
              {truncateText ? truncate(article.title) : article.title}
            </h4>
            <div className='mt-4 flex justify-between'>
              <p className='text-white'>
                {moment(article.publishedAt).fromNow()}
              </p>
              <p className='text-white'>{article.source.name}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
