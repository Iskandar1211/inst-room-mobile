
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin, ILoginConfirm, IRegistration } from '../../../types/Model'

import { RootState } from '../store'

interface IRegistrInterface {
    registration: IRegistration
    login: ILogin
    loginConfirm: ILoginConfirm
    isRegistred: boolean,
    isLogin: boolean,
    isLoginConfirm: boolean

}

const initialState: IRegistrInterface = {
    registration: {
        id: Math.random().toString(),
        lastName: "",
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "user",
        code: ''
    },
    login: {
        phone: ""
    },
    loginConfirm: {
        code: ""
    },
    isRegistred: false,
    isLogin: false,
    isLoginConfirm: false
}

export const Registration = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistration: (state, action: PayloadAction<IRegistration>) => {
            state.registration = action.payload
        },
        setLogin: (state, action: PayloadAction<ILogin>) => {
            state.login = action.payload
        },
        setLoginConfirm: (state, action: PayloadAction<ILoginConfirm>) => {
            state.loginConfirm = action.payload
        },
    },
})

export const { setRegistration, setLogin, setLoginConfirm } = Registration.actions

export const selectRegistration = (state: RootState) => state.registration

export default Registration.reducer

