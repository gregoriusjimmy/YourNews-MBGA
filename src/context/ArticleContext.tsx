import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

import { TArticle } from '@/common/type'

export const ArticleContext = createContext<{
  article: TArticle | null
  setArticle: Dispatch<SetStateAction<TArticle | null>>
  /* tslint:disable:no-empty */
}>({ article: null, setArticle: () => {} })

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [article, setArticle] = useState<TArticle | null>(null)

  return (
    <ArticleContext.Provider
      value={{ article: article, setArticle: setArticle }}
    >
      {children}
    </ArticleContext.Provider>
  )
}
