import { configureStore } from '@reduxjs/toolkit'
import inventory from './inventory'

export const store = configureStore({
  reducer: {
    inventory: inventory,
  },
})
