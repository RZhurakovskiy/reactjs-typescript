import { useState, useEffect } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
  function addProduct (product: IProduct) {
    setProducts(prev => [...prev, product])
  }


    async function fetchProducts() {
      try {
        setError('')
        setLoading(!loading);
        const res = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products?limit=5"
        );
  
        setProducts(res.data);
        setLoading(loading);
      } catch (err: unknown) {
        const error = err as AxiosError
        setLoading(loading);
        setError(error.message)
      }
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return {products, loading, error, addProduct}
}