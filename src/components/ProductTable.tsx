import React, { useState, useEffect } from "react";
import { CreateTable } from "../interfaces/CreateTable";
import { PassProductData } from "../interfaces/PassProductData";
import { handleProductName } from "../methods/handleProductName";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const ProductTable: React.FC<CreateTable> = (props) => {
  const [products, setProducts] = useState<PassProductData[]>([]);

  useEffect(() => {
    if (props.fetchExactProduct) {
      axios
        .get(`https://reqres.in/api/products?id=${props.fetchExactProduct}`)
        .then((res) => setProducts((prev) => [res.data.data]))
        .catch((error) => {
          console.error(error);
          alert(`There has been a problem with your fetch operation: ${error}`);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.fetchExactProduct]);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/products?per_page=5&page=${props.tablePage}`)
      .then((res) => setProducts((prev) => res.data.data))
      .catch((error) => {
        console.error(error);
        alert(`There has been a problem with your fetch operation: ${error}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tablePage]);

  return (
    <div className="table--wraper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 280 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <strong>Name</strong>
              </TableCell>
              <TableCell align="center">
                <strong>ID</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Year</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table--body">
            {products.map((product) => {
              return (
                <TableRow
                  key={product.id}
                  onClick={() => {
                    props.toggleModal();
                    props.passProduct(product);
                  }}
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

export default ProductTable;
