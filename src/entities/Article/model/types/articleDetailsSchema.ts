import { type Article } from '../..'

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: string
  data?: Article
}
