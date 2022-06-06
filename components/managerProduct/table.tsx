import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Badge, Avatar, Group, Button } from '@mantine/core';
import ProductInterface from '@interface/product';
import { ProductAPI } from '@api/products';
import Link from 'next/link';
import Image from 'next/image';
import { Pencil, Trash } from 'tabler-icons-react';

const TableWrapper = styled.table`
  width: 100%;
  margin: 5px;
  border-collapse: collapse;
  border: 3px solid #423e3b;
  td,
  th {
    padding: 10px 15px;
    text-align: center;
  }
  td {
    border-bottom: 1px solid black;
    :last-child {
      border-bottom: 0px;
    }
  }
  tr {
    border: 1px solid black;
  }
  /* td {
    border: 1px solid black;
  } */
  th {
    background: #423e3b;
    color: #fff;
  }
  tbody tr:nth-child(even) {
    background: #f5f5f5;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
    thead {
      display: none;
    }
    table,
    tbody,
    td,
    tr {
      display: block;
      width: 100%;
    }
    tr {
      margin-bottom: 15px;
    }
    td {
      text-align: right;
      position: relative;
      padding-left: 50%;
    }
    td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      top: 8px;
      text-align: left;
      padding-left: 15px;
      font-size: 16px;
      font-weight: bold;
    }
    /* STYLES HERE */
  }
`;
const ProductTableManager = () => {
  const [products, setProducts] = useState<ProductInterface[] | []>([]);
  const _getListProductFromResponse = async (page: number) => {
    const response = await ProductAPI._getListProduct(page);
    console.log('response', response);
    setProducts(response.data.products.product);
    // console.log('response', response.data.products.product);
  };
  useEffect(() => {
    _getListProductFromResponse(1);
  }, []);

  const renderRow = () => {
    return products.map(instance => {
      return (
        <tr key={instance._id}>
          <td data-label="Sản Phẩm">{instance.title}</td>
          <td data-label="Hình Ảnh">
            {/* <Image
              src={instance.image!.toString()}
              height={80}
              width={80}
              objectFit={'contain'}
            ></Image> */}
          </td>
          <td data-label="Giá Tiền">{instance.price}</td>
          <td data-label="Thao Tác">
            <Group position="right" direction="row" noWrap>
              <Link href={`product/${instance._id}`}>
                <Button
                  size={'xs'}
                  variant="outline"
                  leftIcon={<Pencil></Pencil>}
                >
                  Chỉnh Sửa
                </Button>
              </Link>

              <Button
                size={'xs'}
                variant="outline"
                color={'red'}
                leftIcon={<Trash></Trash>}
                onClick={() => {
                  // onHandleDeleteItem(instance._id!);
                }}
              >
                Xóa
              </Button>
            </Group>
          </td>
        </tr>
      );
    });
  };
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Hình ảnh </th>
          <th>Giá Tiền</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>{renderRow()}</tbody>
    </TableWrapper>
  );
};

export default ProductTableManager;
