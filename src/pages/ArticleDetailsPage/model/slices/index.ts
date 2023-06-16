import { combineReducers } from '@reduxjs/toolkit'
import { type ArticleDetailsPageSchema } from '../types'
import {
  articleDetailsPageRecommendationsReducer
} from './articleDetailsPageRecommendationsSlice'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentsReducer
})
