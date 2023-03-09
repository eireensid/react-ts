import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
