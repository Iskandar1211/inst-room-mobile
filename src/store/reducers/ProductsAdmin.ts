import { StyleProps } from 'react-native-reanimated';
import { IProductM } from '../../../types/Model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface IProductsAdmin {
    productsAdmin: IProductM[]
}

export interface productsAdmin {
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

const initialState: IProductsAdmin = {
    productsAdmin: [],
}

export const productsAdminSlice = createSlice({
    name: 'productAdmin',
    initialState,
    reducers: {
        addToProduct: (state, action: PayloadAction<IProductM>) => {
            const newProduct: IProductM = action.payload;
            state.productsAdmin.push(newProduct);
        },

    },
})

export const { addToProduct } = productsAdminSlice.actions

export const selectProductsItems = (state: RootState) => state.cart.items

export default productsAdminSlice.reducer
