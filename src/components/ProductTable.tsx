import React, { useState, useEffect } from "react";
import { tablePage } from "../interfaces/tablePage";
import { tableProduct } from "../interfaces/tableProduct";

const ProductTable: React.FC<tablePage> = (props) => {
  const [products, setProducts] = useState<tableProduct[]>([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/products?per_page=5&page=${props.tablePage}`)
      .then((res) => res.json())
      .then((data) => setProducts((prev) => data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tablePage]);

  console.log("products: ", products, "current page: ", props.tablePage);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ backgroundColor: product.color }}>
            {product.name}
          </div>
        );
      })}
    </div>
  );
};

// https://reqres.in/api/products?per_page=5&page=2

export default ProductTable;
