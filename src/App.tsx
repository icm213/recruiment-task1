import React, { useState, useEffect } from "react";
import PaginationEl from "./components/PaginationEl";
import ProductTable from "./components/ProductTable";
import Modal from "./components/Modal";
import "./styles/index.scss";

const App: React.FC = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  return (
    <div>
      <ProductTable tablePage={currentPage} />
      <PaginationEl
        displayCurrentPage={displayCurrentPage}
        productsCount={totalProducts}
      />
      <Modal />
    </div>
  );
};

export default App;
