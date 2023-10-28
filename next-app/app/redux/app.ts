import {configureStore} from '@reduxjs/toolkit'
import authReducer  from './slices/authSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
export const  appStore = configureStore({
    reducer:{
        //Reducers
        auth: authReducer,
    }
})

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default appStore;