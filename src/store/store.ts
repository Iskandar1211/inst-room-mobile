import { Favorites } from './reducers/Favorites';
import { Сomparison } from './reducers/Сomparison'
import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/Cart'
import { Registration } from './reducers/Registration';
import { productsAdminSlice } from './reducers/ProductsAdmin';
import { orderSlice } from './reducers/Order';
import { productsSlice } from './reducers/Products';


export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: Favorites.reducer,
    comparison: Сomparison.reducer,
    registration: Registration.reducer,
    productsAdmin: productsAdminSlice.reducer,
    order: orderSlice.reducer,
    products: productsSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
