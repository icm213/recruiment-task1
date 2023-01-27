import React, { useState, useEffect } from "react";
import PaginationEl from "./components/PaginationEl";
import ProductTable from "./components/ProductTable";
import Modal from "./components/Modal";
import Input from "./components/Input";
import "./styles/index.scss";
import { Button } from "@mui/material";
import { PassProductData } from "./interfaces/PassProductData";

const App: React.FC = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentAmountOfProducts, setCurrentAmountOfProducts] =
    useState<number>(totalProducts);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProduct, setCurrentProduct] = useState<PassProductData>({
    id: 0,
    name: "",
    year: 0,
    color: "",
    pantone_value: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [fetchExactProduct, setFetchExactProduct] = useState<number>(0);

  useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTotalProducts((prev) => data.total);
      })
      .catch((error) => {
        console.error(error);
        alert(`There has been a problem with your fetch operation: ${error}`);
      });
  }, []);

  useEffect(() => {
    setCurrentAmountOfProducts((prev) => totalProducts);
  }, [totalProducts]);

  const handleCurrentAmountOfProducts = (productsAmount: number) => {
    setCurrentAmountOfProducts((prev) => productsAmount);
  };

  const displayCurrentPageFromPagination = (page: number) => {
    setCurrentPage((prev) => page);
  };

  const takeCurrentProductForModal = (productObj: PassProductData) => {
    setCurrentProduct((prev) => productObj);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleChange = (e: { target: { value: string } }) => {
    setInputValue((prev) => e.target.value);
  };

  const handleClickForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFetchExactProduct((prev) => parseFloat(inputValue));
    setInputValue((prev) => "");
  };

  return (
    <div className="wraper">
      <form className="input--wraper" onSubmit={handleClickForm}>
        <Input handleChange={handleChange} inputValue={inputValue} />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
      <ProductTable
        handleCurrentAmountOfProducts={handleCurrentAmountOfProducts}
        fetchExactProduct={fetchExactProduct}
        tablePage={currentPage}
        passProduct={takeCurrentProductForModal}
        toggleModal={toggleModal}
        productsCount={totalProducts}
      />
      <PaginationEl
        displayCurrentPage={displayCurrentPageFromPagination}
        productsCount={currentAmountOfProducts}
      />
      {showModal && <Modal toggleModal={toggleModal} {...currentProduct} />}
    </div>
  );
};

export default App;
