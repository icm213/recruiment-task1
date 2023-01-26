import React, { useState, useEffect } from "react";
import PaginationEl from "./components/PaginationEl";
import ProductTable from "./components/ProductTable";
import Modal from "./components/Modal";
import Input from "./components/Input";
import "./styles/index.scss";
import { Button } from "@mui/material";
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
  const [inputValue, setInputValue] = useState<number | string>("");
  const [fetchExactProduct, setFetchExactProduct] = useState<number | string>(
    0
  );

  useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setTotalProducts((prev) => data.total);
      });
  }, []);

  const displayCurrentPageFromPagination = (page: number) => {
    setCurrentPage((prev) => page);
  };

  const takeCurrentProductForModal = (productObj: tableProduct) => {
    setCurrentProduct((prev) => productObj);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleChange = (e: { target: { value: string } }) => {
    setInputValue((prev) => {
      return parseInt(e.target.value) ? parseInt(e.target.value) : "";
    });
  };

  const handleClickForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!inputValue) return;
    setFetchExactProduct((prev) => inputValue);
  };

  console.log(fetchExactProduct);

  return (
    <div className="wraper">
      <form className="input--wraper" onSubmit={handleClickForm}>
        <Input handleChange={handleChange} inputValue={inputValue} />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
      <ProductTable
        fetchExactProduct={fetchExactProduct}
        tablePage={currentPage}
        passProduct={takeCurrentProductForModal}
        toggleModal={toggleModal}
      />
      <PaginationEl
        displayCurrentPage={displayCurrentPageFromPagination}
        productsCount={totalProducts}
      />
      {showModal && <Modal toggleModal={toggleModal} {...currentProduct} />}
    </div>
  );
};

export default App;
