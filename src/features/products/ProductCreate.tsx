import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../app/store";
import { createProduct } from "./productsSlice";

export default function ProductCreate(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [description, setDiscription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const dispatch = useAppDispatch();
const [error, setError] = useState<string>('');

  function validateINputs():boolean {
    if(title.trim()===''){
        setError('Title not valid');
        return false;
    }
    return true;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateINputs()){
        dispatch(createProduct({title, price, category, description,image}));
    }

}
  return (
    <div>
      <h1>NEW PRODUCT</h1>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            category
          </option>
          <option value="electronics" disabled>
            electronics
          </option>
          <option value="jewelery" disabled>
            jewelery
          </option>
          <option value="men's clothing" disabled>
            men's clothing
          </option>
        </select>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Greate</button>
      </form>
    </div>
  );
}
