import { combineReducers } from 'redux'
import {
  type TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { testSlice } from './slices/test/testSlice.ts'

const rootReducer = combineReducers({
  test: testSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useDispatch = dispatchHook.withTypes<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> =
  selectorHook.withTypes<RootState>()

export default store
