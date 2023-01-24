import React, { useState, useEffect } from "react";
import PaginationEl from "./components/Pagination";

const App: React.FC = () => {
  const [totalProducts, setTotalProducts] = useState<number>(0);

  useEffect(() => {
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((data) => {
        setTotalProducts((prev) => data.total);
      });
  }, []);

  console.log(totalProducts);

  return (
    <div>
      <PaginationEl productsCount={totalProducts} />
    </div>
  );
};

export default App;
