
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILogin, IRegistrationM } from '../../../types/Model'

import { RootState } from '../store'

interface IRegistrInterface {
    registration: IRegistrationM
    loginConfirm: ILogin
    isRegistred: boolean,
}

const initialState: IRegistrInterface = {
    registration: {
        name: '',
        city: '',
        email: '',
        password: '',
        phone: '',
        role: 'user',
    },
    loginConfirm: {
        email: '',
        password: '',
    },
    isRegistred: false,
}

export const Registration = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistration: (state, action: PayloadAction<IRegistrationM>) => {
            state.registration = action.payload
        },
        setLoginConfirm: (state, action: PayloadAction<ILogin>) => {
            state.loginConfirm = action.payload
        },
        setIsRegistred: (state, action: PayloadAction<boolean>) => {
            state.isRegistred = action.payload
        }
    },
})

export const { setRegistration, setLoginConfirm, setIsRegistred } = Registration.actions

export const selectRegistration = (state: RootState) => state.registration

export default Registration.reducer

