import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const inventory = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, aksi) => {
      const { nama, qty } = aksi.payload

      state.items.push({
        nama,
        qty,
      })
    },
  },
})

export const { addItem } = inventory.actions
export default inventory.reducer
