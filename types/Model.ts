import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageProps } from "react-native";

export interface IProductM {
    id: string,
    name: string,
    img: ImageProps,
    price: number,
    inStock: boolean,
    detailed: string,
    isNew: boolean,
    total: number,
    quantity: number,
    categories: string
}

export interface IProductAcord {
    id: string,
    orderNumber: number,
    created: string,
    received: string,
    purchases: IProductM[]
}

export interface IOrder {
    id: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

export interface IDelivery {
    id: string
    city: string
    street: string
    house: string
    apartment: string
    delivery: boolean
    pickupAddress: string | undefined
}

export interface IPayment {
    id: string,
    paymentUponReceipt: boolean,
    cash: boolean,
    bankСard: boolean,
    onlinePayment: boolean,
}

export interface IHistoryOfOrder {
    id: string,
    orderNumber: number,
    created: string,
    received: string,
    purchases: IProductM[],
    orders: IOrder[],
    deliveryInfo: IDelivery[],
    payments: IPayment[]
}
export interface IHistoryOfOrderForServer {
    id: string,
    orderNumber: number,
    created: string,
    received: string,
    purchases: IProductM[],
    orders: IOrder[],
    deliveryInfo: IDelivery[],
    payments: IPayment[]
}

export interface IRegistration {
    id: string,
    lastName: string,
    name: string,
    phone: string,
    email: string,
    password: string,
    confirmPassword: string
    role: string
    code: string
}
export interface ILogin {
    phone: string
}
export interface ILoginConfirm {
    code: string
}
export type StackNavigationParams = {
    ProductInfo: {
        product: IProductM
    }
    Home: undefined
}

export type RootRouteProps<RouteName extends keyof StackNavigationParams> =
    RouteProp<StackNavigationParams, RouteName>

export type RootNavigationProps<
    NavigationName extends keyof StackNavigationParams,
> = NativeStackScreenProps<StackNavigationParams, NavigationName>