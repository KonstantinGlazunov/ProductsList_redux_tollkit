import Product from "./type/Product";
import ProductDTO from "./type/ProductDTO";

//метод для получения данных
export const getAll = async ():Promise<Product[]> => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
}

/*
export  async function getAll(): Promise<Product[]>{
    const res = await fetch("https://fakestoreapi.com/products") ;
    return res.json();
}
*/
//DELETE  явно указали       //смотрим что приходит с backend !!!!
export async function deleteProduct(id:number): Promise<Product>{
    const res = await fetch (`https://fakestoreapi.com/products/${id}`,{
method: 'DELETE'    //берм в документации сервера
});
    return res.json();
}


//POST
export async function createProduct (product: ProductDTO): Promise<Product> {
    const res = await fetch ('https://fakestoreapi.com/products', {
        method: 'POST',
        body:JSON.stringify(
            {    
                title:product.title,
                price:product.price,
                category:product.price,
                description:product.price,
                image:product.image 
    })
});
// return  res.json();
const {id} = await res.json();
return{...product,id}; 

    }



