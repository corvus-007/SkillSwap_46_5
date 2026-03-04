import { createSlice } from '@reduxjs/toolkit'

type TTestState = {
  counter: number
}

const initialState: TTestState = {
  counter: 0,
}

export const testSlice = createSlice({
  name: 'test',
  initialState,
  selectors: {
    getCounter: (state: TTestState) => state.counter,
  },
  reducers: {
    increment(state) {
      state.counter += 1
    },
  },
})

export const { increment } = testSlice.actions
export const { getCounter } = testSlice.selectors
export const reducer = testSlice.reducer
