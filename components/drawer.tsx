import React from "react";
import styled from "styled-components";
import { ActionIcon, Button } from "@mantine/core";
import { useAppDispatch } from "@redux/hook";
import { changeDrawerState } from "@redux/slice/drawer/drawerSlice";
import { Home, BorderAll, SquareX, Logout, UserCircle, BrandProducthunt } from "tabler-icons-react";

interface propsType {
  open: boolean;
  title?: string;
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.section<propsType>`
  flex-basis: 15%;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 15%;
  position: relative;
  .header-content {
    font-size: 20px;
    font-weight: 750;
    text-transform: uppercase;
  }
  .header-actions {
    position: absolute;
    top: 10px;
    right: ${(props) => (props.open ? "10px" : "-200%")};
  }
`;
const Center = styled.section`
  flex-basis: 75%;
  max-height: 75%;
  border-bottom: 1px solid #cccccc;
  padding: 10px;
`;
const Footer = styled.section`
  flex-basis: 10%;
  max-height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Drawer = (props: propsType) => {
  const { open, title } = props;
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Header open={open}>
        <div className="header-content">{title}</div>
        <div className="header-actions">
          <ActionIcon
            variant="transparent"
            onClick={() => {
              dispatch(changeDrawerState());
            }}
          >
            <SquareX />
          </ActionIcon>
        </div>
      </Header>
      <Center>
        <Button component="a" href="/" color="cyan" fullWidth={true} leftIcon={<Home size={14} />} style={{ marginBottom: "10px" }} variant="outline">
          Trang chủ
        </Button>
        <Button component="a" href="/products" color="cyan" fullWidth={true} leftIcon={<BrandProducthunt size={14} />} style={{ marginBottom: "10px" }} variant="outline">
          Quản lý sản phẩm
        </Button>
        <Button color="cyan" fullWidth={true} leftIcon={<UserCircle size={14} />} style={{ marginBottom: "10px" }} variant="outline">
          Danh sách khách hàng
        </Button>
        <Button color="cyan" fullWidth={true} leftIcon={<BorderAll size={14} />} style={{ marginBottom: "10px" }} variant="outline">
          Quản lý đơn hàng
        </Button>
        <Button
          color="cyan"
          fullWidth={true}
          leftIcon={<Logout size={14} />}
          style={{ marginBottom: "10px" }}
          variant="outline"
          onClick={() => {
            localStorage.removeItem("access_token");
          }}
        >
          Thoát
        </Button>
      </Center>
      <Footer>F</Footer>
    </Wrapper>
  );
};

export default Drawer;
