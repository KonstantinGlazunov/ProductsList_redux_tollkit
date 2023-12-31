import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/productsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";




export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//export const useAppDispatch = () => useDispatch();
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
