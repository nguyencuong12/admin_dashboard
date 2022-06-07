import React from "react";
import { Pagination } from "@mantine/core";
interface propsInterface {
  amountAllProducts: number;
  activePage: number;
  changePage: Function;
}
const PaginationComponent = (props: propsInterface) => {
  const { amountAllProducts, activePage, changePage } = props;
  return (
    <Pagination
      style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      // Math.ceil(total_items/limit);
      total={Math.ceil(amountAllProducts / 4)}
      color="cyan"
      page={activePage}
      onChange={async (page: number) => {
        changePage(page);
        // setPage(page);
        // excuteAction();
        // let response = await ProductAPI.getAllProduct(page);
        // setLoading(false);
        // setProducts(response.data.products.product);
        // setTotalPage(response.data.products.count);
        // setProductAndSaveInState();
      }}
    />
  );
};

export default PaginationComponent;
