import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductM } from '../../../types/Model'
import { RootState } from '../store'

interface FavoritesState {
    items: IProductM[]
}


const initialState: FavoritesState = {
    items: [],
}

export const Favorites = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<IProductM>) => {
            state.items.push(action.payload);
        },

        removeFromFavorites: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        },
        updateFavorites: (state, action: PayloadAction<string>) => {
            const itemId = action.payload
            const item = state.items.find(item => item.id === itemId)

            if (item) {
                item.id = itemId
            }
        },
        clearFavorites: state => {
            state.items = []
        },
    },
})

export const { addToFavorites, removeFromFavorites, updateFavorites, clearFavorites } = Favorites.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default Favorites.reducer
