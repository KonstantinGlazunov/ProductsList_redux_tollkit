import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch, useAppSelector } from "../../app/store";
import { selectError, selectProducts } from "./selectors";
import { loadProducts } from "./productsSlice";

export default function ProductsList(): JSX.Element {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  useEffect(() => {  //при любом вызове dispatch вызовет (подгрузит актуальный список продуктов)
    dispatch(loadProducts() as any);  //!!!!!!!!!!! обход типизации!!!!!!!
  }, [dispatch]);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <li key={product.id}>{product.title} </li>
      ))}
    </div>
  );
}
