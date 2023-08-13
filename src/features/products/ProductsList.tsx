import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../../app/store";
import { chooseFavoriteProduct, selectError, selectProducts, selectToggle } from "./selectors";
import {
  changeToggleStatus,
  choseFavoriteProduct,
  deleteProduct,
  loadProducts,
} from "./productsSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductsList(): JSX.Element {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const toggle = useAppSelector(selectToggle);
  const favoriteProduct = useAppSelector(chooseFavoriteProduct);
  useEffect(() => {
    //при любом вызове dispatch вызовет (подгрузит актуальный список продуктов)
    dispatch(loadProducts()) // as any - обход типизации если проблема с экспортами!
  }, [dispatch]);
  const handleDelete = (id: number): void => {   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //импорт не из api!
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      <h1>Product List</h1>
      <h2>Favorite: {!favoriteProduct ?  (<span>no favorite</span>): favoriteProduct?.title } </h2>
      
            <div
        style={
          toggle ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        STATUS
      </div>
      <button type="button" onClick={() => dispatch(changeToggleStatus())}>
        Change toggle status
      </button>
      {products.map((product) => (
        <li key={product.id}>
          {product.title}
          <FavoriteIcon
            onClick={() => dispatch(choseFavoriteProduct(product))}
          />
          <button
            type="button"
            onClick={() => dispatch(deleteProduct(product.id))}
          >
            DELETE
          </button>
        </li>
      ))}
    </div>
  );
}
