import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pedido, Restaurante } from '../../pages/Home'

type CartState = {
  items: Restaurante[]
  order: Pedido[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  order: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pedido>) => {
      const p = state.order.find((pe) => pe.id === action.payload.id)
      if (!p) {
        state.order.push(action.payload)
      } else {
        alert('Pedido já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.order = state.order.filter((p) => p.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, close, open } = cartSlice.actions
export default cartSlice.reducer
