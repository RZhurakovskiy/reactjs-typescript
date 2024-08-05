import { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";


import Error from "./Error";

const url = "https://fakestoreapi.com/products";

const fetchData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 12,
  },
};

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('')

    if (value.trim().length === 0) {
      setError("Пожалуйста заполните поле названия продукта!");
      return;
    } else {
      fetchData.title = value;

      const response = await axios.post<IProduct>(url, fetchData);


      onCreate(response.data)

      console.log(response);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Введите название продукта"
        value={value}
        onChange={changeHandler}
      />

      {error && <Error error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Создать
      </button>
    </form>
  );
};

export default CreateProduct;
