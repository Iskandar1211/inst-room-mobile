import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductM } from '../../../types/Model'
import { RootState } from '../store'

interface CartState {
    items: IProductM[]
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProductM>) => {
            const newItem: IProductM = {
                ...action.payload,
                total: action.payload.price,
                quantity: 1
            };
            state.items.push(newItem);
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        },
        updateItem: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)

            if (item) {
                item.id = itemId
            }
        },
        clearCart: state => {
            state.items = []
        },
        incrementQuantity: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)
            if (item) {
                // Обновите свойство quantity
                item.quantity = (item.quantity || 1) + 1
                // Обновите свойство total
                item.total = (item.total || 1) + item.price
            }
        },
        decrementQuantity: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)

            if (item) {
                if (item.quantity > 1 && item.total > 0) {
                    item.quantity = (item.quantity || 0) - 1
                    // Обновите свойство total
                    item.total = (item.total || 0) - item.price
                }
            }
        },
    },
})

export const { addToCart, removeFromCart, updateItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
