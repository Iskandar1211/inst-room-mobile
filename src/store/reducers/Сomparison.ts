import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface IСomparison {
    comparison: Item[]
}

export interface Item {
    id: string,
    name: string,
    img: string,
    price: number,
    inStock: boolean,
    detailed: string,
    isNew: boolean,
    total: number,
    quantity: number,
    categories: string
}

const initialState: IСomparison = {
    comparison: [],
}

export const Сomparison = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addToСomparison: (state, action: PayloadAction<Item>) => {
            state.comparison.push(action.payload);
        },

        removeFromСomparison: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            state.comparison = state.comparison.filter(item => item.id !== itemId)
        },
        updateСomparison: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.comparison.find(item => item.id === itemId)

            if (item) {
                item.id = itemId
            }
        },


    },
})

export const { addToСomparison, removeFromСomparison, updateСomparison } = Сomparison.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default Сomparison.reducer
