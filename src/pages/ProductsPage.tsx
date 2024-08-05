import Product from '../components/Product';
import Loader from "../components/Loader";
import Error from "../components/Error";
import CreateProduct from "../components/CreateProduct";

import Modal from "../components/Modal";
import { useProducts } from "../hooks/products";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

const ProductsPage = () => {
  const { products, loading, error, addProduct } = useProducts();
  const { isModalVisible, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <>
      <button
        onClick={open}
        className="fixed bottom-5 right-5 mx-2 my-2 py-2 px-5 bg-blue-500 text-white"
      >
        Добавить продукт
      </button>
      <div className="container mx-auto max-w-2xl pt-5">
        {error && <Error error={error} />}
        {loading && <Loader />}
        {products.map((product) => (
          <Product product={product} key={product.title} />
        ))}

        {isModalVisible && (
          <Modal title="Форма добавления товара" onClose={close}>
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
