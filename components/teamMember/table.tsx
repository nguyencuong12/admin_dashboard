import React from "react";
import styled from "styled-components";
import { Badge, Avatar, Group } from "@mantine/core";

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
const TeamTableComponent = () => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Thành Viên</th>
          <th>Trạng Thái</th>
          <th>Quyền Truy Cập</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Thành Viên">
            <Group position="center">
              <Avatar src="/favicon.ico"></Avatar>
              Admin
            </Group>
          </td>
          <td data-label="Trạng Thái">
            <Badge color="green">Online</Badge>
          </td>
          <td data-label="Quyền Truy Cập">ADMIN</td>
          <td data-label="Sales">asdas</td>
        </tr>
      </tbody>
    </TableWrapper>
  );
};

export default TeamTableComponent;
