import React, { useState, useEffect } from "react";
import { tablePage } from "../interfaces/tablePage";
import { tableProduct } from "../interfaces/tableProduct";
import { handleProductName } from "../methods/handleProductName";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductTable: React.FC<tablePage> = (props) => {
  const [products, setProducts] = useState<tableProduct[]>([]);

  useEffect(() => {
    if (props.fetchExactProduct) {
      fetch(`https://reqres.in/api/products/${props.fetchExactProduct}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not OK");
          }
          return res.json();
        })
        .then((data) => setProducts((prev) => [data.data]))
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
          alert(`There has been a problem with your fetch operation: ${error}`);
        });
    }
  }, [props.fetchExactProduct]);

  useEffect(() => {
    fetch(`https://reqres.in/api/products?per_page=5&page=${props.tablePage}`)
      .then((res) => res.json())
      .then((data) => setProducts((prev) => data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tablePage]);

  return (
    <div className="table--wraper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 280 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table--body">
            {products.map((product) => {
              return (
                <TableRow
                  onClick={() => {
                    props.toggleModal();
                    props.passProduct(product);
                  }}
                  key={product.id}
                  className="table--item"
                  style={{ backgroundColor: `${product.color}70` }}
                >
                  <TableCell align="left">
                    {handleProductName(product.name)}
                  </TableCell>
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center">{product.year}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// https://reqres.in/api/products?per_page=5&page=2

export default ProductTable;
