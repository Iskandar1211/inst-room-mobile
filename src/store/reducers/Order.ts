import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import moment from "moment"
import { IDelivery, IHistoryOfOrder, IOrder, IPayment, IProductM } from '../../../types/Model'

interface ordersState {
    order: IHistoryOfOrder
}

const initialState: ordersState = {
    order: {
        id: Math.random().toString(),
        orderNumber: 0,
        created: moment().format('d.MM.YYYY'),
        received: moment().format('d.MM.YYYY'),
        purchases: [],
        deliveryInfo: [],
        payments: []
    }
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderNumber: (state, action: PayloadAction<number>) => {
            const newOrder: number = action.payload
            state.order.orderNumber = newOrder
        },
        addToPurchases: (state, action: PayloadAction<IProductM[]>) => {
            const newPurchases: IProductM[] = action.payload
            newPurchases.map(pruduct => state.order.purchases.push(pruduct))
        },
        addToDeliveryInfo: (state, action: PayloadAction<IDelivery>) => {
            const newDeliveryInfo: IDelivery = action.payload
            state.order.deliveryInfo.push(newDeliveryInfo)
        },
        addTopPayments: (state, action: PayloadAction<IPayment>) => {
            const newPayment: IPayment = action.payload
            state.order.payments.push(newPayment)
        },
        clearOrder: state => {
            state.order = {
                id: Math.random().toString(),
                orderNumber: 0,
                created: moment().format('d.MM.YYYY'),
                received: moment().format('d.MM.YYYY'),
                purchases: [],
                deliveryInfo: [],
                payments: []
            }
        },
    }
});

export const { addToPurchases, addToDeliveryInfo, addTopPayments, clearOrder, addOrderNumber } = orderSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items

export default orderSlice.reducer
