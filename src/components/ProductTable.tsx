import React, { useState, useEffect } from "react";
import { tablePage } from "../interfaces/tablePage";
import { tableProduct } from "../interfaces/tableProduct";

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
    fetch(`https://reqres.in/api/products?per_page=5&page=${props.tablePage}`)
      .then((res) => res.json())
      .then((data) => setProducts((prev) => data.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tablePage]);

  console.log("products: ", products, "current page: ", props.tablePage);

  return (
    <div className="table--wraper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table--body">
            {products.map((product) => {
              const splitted = product.name.split(" ");
              for (let i = 0; i < splitted.length; i++) {
                splitted[i] =
                  splitted[i][0].toUpperCase() + splitted[i].slice(1);
              }
              const joined = splitted.join(" ");
              return (
                <TableRow
                  key={product.id}
                  className="table--item"
                  style={{ backgroundColor: `${product.color}70` }}
                >
                  <TableCell align="left">{joined}</TableCell>
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
