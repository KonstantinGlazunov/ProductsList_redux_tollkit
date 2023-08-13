import { RootState } from "../../app/store";
import Product from "./type/Product";

export const selectProducts = (state:RootState):Product[]=>state.products.products 
export const selectError = (state:RootState):string | undefined =>state.products.error
export const selectToggle = (state:RootState):boolean | undefined =>state.products.toggle
export const chooseFavoriteProduct = (state:RootState):Product | undefined =>state.products.favoriteProduct