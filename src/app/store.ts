import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { combineReducers } from 'redux';
import productSlice from "../entities/product/productSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: combineReducers({
        products: productSlice,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

setupListeners(store.dispatch)
