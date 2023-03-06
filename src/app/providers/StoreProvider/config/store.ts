import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
