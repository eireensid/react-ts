import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import {
  type AnyAction, type CombinedState,
  type EnhancedStore, type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type AddCommentFormSchema } from 'features/addCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type UISchema } from 'features/ScrollSave'
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage'

export interface StateSchema {
  user: UserSchema
  ui: UISchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
  articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
  getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
