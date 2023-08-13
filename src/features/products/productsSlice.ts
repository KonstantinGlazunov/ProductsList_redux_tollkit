import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductState from "./type/ProductState";
import * as api from "./api";
import Product from "./type/Product";
import ProductDTO from "./type/ProductDTO";
//import {getAll} from "./api";

const initialState: ProductState = {
  products: [],
};

export const loadProducts = createAsyncThunk(
  "products/loadProducts", //type
  () => api.getAll() //payload Product[], то что возвращает api
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct", //type
  (id: number) => api.deleteProduct(id) //payload Product, то что возвращает api  c раскрытым промисом
);
export const createProduct = createAsyncThunk(
  "products/createProduct", //type
  (newProduct: ProductDTO) => api.createProduct(newProduct) //payload Product, то что возвращает api  c раскрытым промисом
);



export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeToggleStatus:(state)=>{
        state.toggle = !state.toggle;
    },

  choseFavoriteProduct: (state, action: PayloadAction<Product>)=>{
state.favoriteProduct = action.payload;
  },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = 
        state.products 
            .filter((product)=>product.id!==action.payload.id);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload)
      })
  }
});

export default productSlice.reducer;
export const {changeToggleStatus, choseFavoriteProduct} = productSlice.actions;
