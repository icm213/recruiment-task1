import React, { useState, useEffect } from "react";
import PaginationEl from "./components/PaginationEl";
import ProductTable from "./components/ProductTable";
import Modal from "./components/Modal";
import Input from "./components/Input";
import { Button } from "@mui/material";
import { PassProductData } from "./interfaces/PassProductData";
import axios from "axios";

const App: React.FC = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentProduct, setCurrentProduct] = useState<PassProductData>({
    id: 0,
    name: "",
    year: 0,
    color: "",
    pantone_value: "",
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [fetchExactProduct, setFetchExactProduct] = useState<number>(0);
  const [pagination, setPagination] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/products")
      .then((res) => {
        setTotalProducts((prev) => res.data.total);
      })
      .catch((error) => {
        console.error(error);
        alert(`There has been a problem with your fetch operation: ${error}`);
      });
  }, []);

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
    setPagination((prev) => false);
  };

  return (
    <div className="wraper">
      <form className="input--wraper" onSubmit={handleClickForm}>
        <Input
          handleChange={handleChange}
          inputValue={inputValue}
          productsCount={totalProducts}
        />
        <Button
          className="button--submit"
          variant="contained"
          type="submit"
          disabled={!inputValue ? true : false}
        >
          Search
        </Button>
        <Button
          variant="outlined"
          type="button"
          onClick={() => window.location.reload()}
        >
          Reload
        </Button>
      </form>

      <ProductTable
        fetchExactProduct={fetchExactProduct}
        tablePage={currentPage}
        passProduct={takeCurrentProductForModal}
        toggleModal={toggleModal}
        productsCount={totalProducts}
      />
      {pagination && (
        <PaginationEl
          displayCurrentPage={displayCurrentPageFromPagination}
          productsCount={totalProducts}
        />
      )}
      {showModal && <Modal toggleModal={toggleModal} {...currentProduct} />}
    </div>
  );
};

export default App;
