import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductState from "./type/ProductState";
import * as api from './api'

const initialState: ProductState = {
    products: [],
};


export const loadProducts  = createAsyncThunk(
    'products/loadProducts', //type
    ()=>api.getAll() //payload Product[], то что возвращает api 
);

export const productSlice = createSlice({
name: 'products',
initialState,
reducers:{},
extraReducers:(builder)=>{
builder
.addCase(
    loadProducts.fulfilled, (state, action)=>{
        state.products = action.payload
    })
}
});

export default productSlice.reducer;