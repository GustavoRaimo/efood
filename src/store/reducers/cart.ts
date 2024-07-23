import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurante[]
  order: Pedido[]
  isOpen: boolean
  isAddress: boolean
  isCart: boolean
  isPayment: boolean
  confirmPayment: boolean
  closeOrder: boolean
}

const initialState: CartState = {
  items: [],
  order: [],
  isOpen: false,
  isAddress: false,
  isCart: true,
  isPayment: false,
  confirmPayment: false,
  closeOrder: false
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
    },
    openCheckout: (state) => {
      state.isOpen = false
      state.isAddress = true
    },
    returnToCart: (state) => {
      state.isOpen = true
      state.isAddress = false
    },
    openPayment: (state) => {
      state.isPayment = true
      state.isAddress = false
    },
    returnToPayment: (state) => {
      state.isPayment = false
      state.isAddress = true
    },
    openConfirmPayment: (state) => {
      state.isPayment = false
      state.confirmPayment = true
    },
    finishOrder: (state) => {
      state.confirmPayment = false
      state.order = []
    }
  }
})

export const {
  add,
  remove,
  close,
  open,
  openCheckout,
  returnToCart,
  openPayment,
  returnToPayment,
  openConfirmPayment,
  finishOrder
} = cartSlice.actions
export default cartSlice.reducer
