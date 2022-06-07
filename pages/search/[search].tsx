import React, { useEffect, useState } from "react";
import ProductTableManager from "@components/managerProduct/table";

import { SearchAPI } from "@api/search";
import { useRouter } from "next/router";
import ProductInterface from "@interface/product";

const SearchComponent = () => {
  const router = useRouter();
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const { search } = router.query;
  const _searchProductFromResponse = async () => {
    let response = await SearchAPI.search(search?.toString()!);
    console.log("response", response);
    setProducts(response.data.searchResults);
  };
  useEffect(() => {
    if (search) {
      _searchProductFromResponse();
    }
  }, [search]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Kết quả tìm kiếm</h1>
      <ProductTableManager products={products} callbackRemoveProduct={() => {}}></ProductTableManager>
    </>
  );
};

export default SearchComponent;
