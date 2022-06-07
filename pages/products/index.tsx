import React, { useEffect, useState } from "react";
import ProductTableManager from "@components/managerProduct/table";
import styled from "styled-components";
import PaginationComponent from "@components/pagination";
import { ProductAPI } from "@api/products";
import ProductInterface from "@interface/product";
import { AlertObject } from "@utils/alert";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<ProductInterface[] | []>([]);
  const [allProductAmount, setAllProductAmount] = useState(0);

  useEffect(() => {
    _getListProductFromResponse(currentPage);
  }, []);
  useEffect(() => {
    if (currentPage) {
      _getListProductFromResponse(currentPage);
    }
  }, [currentPage]);
  const _getListProductFromResponse = async (page: number) => {
    const response = await ProductAPI._getListProduct(page);
    setProducts(response.data.products.product);
    setAllProductAmount(response.data.products.count);
  };
  const onChangePagination = async (page: number) => {
    setCurrentPage(page);
  };
  const onRemoveProduct = async (id: string) => {
    AlertObject.delete("Bạn có muốn xóa sản phẩm này ? ", async () => {
      await ProductAPI._deleteProductByID(id);
      await _getListProductFromResponse(currentPage);
    });
  };
  return (
    <ProductWrapper>
      <ProductTableManager products={products} callbackRemoveProduct={onRemoveProduct}></ProductTableManager>
      <PaginationComponent changePage={onChangePagination} amountAllProducts={allProductAmount} activePage={currentPage}></PaginationComponent>
    </ProductWrapper>
  );
};

export default ProductManagement;
