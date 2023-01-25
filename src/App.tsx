import React, { useState, useEffect } from "react";
import PaginationEl from "./components/PaginationEl";
import ProductTable from "./components/ProductTable";
import Modal from "./components/Modal";
import "./styles/index.scss";
import "./interfaces/tableProduct";
import { tableProduct } from "./interfaces/tableProduct";

const App: React.FC = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProduct, setCurrentProduct] = useState<tableProduct>({
    id: 0,
    name: "",
    year: 0,
    color: "",
    pantone_value: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setTotalProducts((prev) => data.total);
      });
  }, []);

  const displayCurrentPage = (page: number) => {
    setCurrentPage((prev) => page);
  };

  const takeCurrentProduct = (productObj: tableProduct) => {
    setCurrentProduct((prev) => productObj);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  console.log(currentProduct);

  return (
    <div>
      <ProductTable
        tablePage={currentPage}
        passProduct={takeCurrentProduct}
        toggleModal={toggleModal}
      />
      <PaginationEl
        displayCurrentPage={displayCurrentPage}
        productsCount={totalProducts}
      />
      {showModal && <Modal toggleModal={toggleModal} {...currentProduct} />}
    </div>
  );
};

export default App;
