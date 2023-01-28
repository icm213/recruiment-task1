import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Routes,
  NavLink,
  useParams,
} from "react-router-dom";
import PaginationEl from "./components/PaginationEl";
import ProductTable from "./components/ProductTable";
import Modal from "./components/Modal";
import Input from "./components/Input";
import "./styles/index.scss";
import { Button } from "@mui/material";
import { PassProductData } from "./interfaces/PassProductData";

// const RouteTest1: React.FC = () => {
//   return <div>router test, elem 1</div>;
// };
// const RouteTest2: React.FC = () => {
//   let { userId } = useParams();
//   return (
//     <div>
//       <p>router test, elem 2 </p>
//       <p>{userId}</p>
//     </div>
//   );
// };
// const RouteTest3: React.FC = () => {
//   return <div>router test, elem 3</div>;
// };

const NotFound: React.FC = () => {
  return (
    <div>
      <p>not found</p>
      <Link to="/">Go to home</Link>
    </div>
  );
};

// const App: React.FC = () => {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<RouteTest1 />} />
//         <Route path="/elem2/:userId" element={<RouteTest2 />} />
//         <Route path="/elem3" element={<RouteTest3 />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </HashRouter>
//   );
// };

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
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProductTable
                handleCurrentAmountOfProducts={handleCurrentAmountOfProducts}
                fetchExactProduct={fetchExactProduct}
                tablePage={currentPage}
                passProduct={takeCurrentProductForModal}
                toggleModal={toggleModal}
                productsCount={totalProducts}
              />
            }
          />
          <Route
            path="/page2"
            element={
              <ProductTable
                handleCurrentAmountOfProducts={handleCurrentAmountOfProducts}
                fetchExactProduct={fetchExactProduct}
                tablePage={currentPage}
                passProduct={takeCurrentProductForModal}
                toggleModal={toggleModal}
                productsCount={totalProducts}
              />
            }
          />
          <Route
            path="/page3"
            element={
              <ProductTable
                handleCurrentAmountOfProducts={handleCurrentAmountOfProducts}
                fetchExactProduct={fetchExactProduct}
                tablePage={currentPage}
                passProduct={takeCurrentProductForModal}
                toggleModal={toggleModal}
                productsCount={totalProducts}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <PaginationEl
        displayCurrentPage={displayCurrentPageFromPagination}
        productsCount={currentAmountOfProducts}
      />
      {showModal && <Modal toggleModal={toggleModal} {...currentProduct} />}
    </div>
  );
};

export default App;
