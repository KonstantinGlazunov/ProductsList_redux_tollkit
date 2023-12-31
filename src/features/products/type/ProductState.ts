import Product from "./Product";

export default interface ProductState {
  products: Product[];
  error?: string;
  toggle?:boolean;
  favoriteProduct?: Product;
}
