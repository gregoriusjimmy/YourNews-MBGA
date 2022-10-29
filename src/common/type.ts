export type TArticle = {
  source: {
    id: string | null
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string | null
  publishedAt: Date
  content: string
}

export type TGetTopHeadlinesRes = {
  status: 'ok' | 'error'
  totalResults: number
  articles: TArticle[]
}
