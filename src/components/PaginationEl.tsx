import React, { useState, useEffect } from "react";
import { paginationElems } from "../methods/paginationElems";
import { Pagination } from "@mui/material";
import { productsCount } from "../interfaces/productsCount";

const PaginationEl: React.FC<productsCount> = (props) => {
  const [paginationPages, setPaginationPages] = useState<number>(0);

  useEffect(() => {
    setPaginationPages((prev) => paginationElems(props.productsCount));
  }, [props.productsCount]);

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
