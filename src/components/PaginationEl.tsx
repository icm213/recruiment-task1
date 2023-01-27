import React, { useState, useEffect } from "react";
import { paginationElems } from "../methods/paginationElems";
import { Pagination } from "@mui/material";
import { PassProductsCount } from "../interfaces/PassProductsCount";

const PaginationEl: React.FC<PassProductsCount> = (props) => {
  const [paginationPages, setPaginationPages] = useState<number>(0);

  useEffect(() => {
    setPaginationPages((prev) => paginationElems(props.productsCount));
  }, [props.productsCount]);

  console.log(props.productsCount);

  const changePage: (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => void = (e, page) => {
    props.displayCurrentPage(page);
  };

  return (
    <div className="pagination">
      <Pagination
        count={paginationPages}
        onChange={changePage}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default PaginationEl;
