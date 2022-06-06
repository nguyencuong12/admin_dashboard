import React, { ReactNode } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import Drawer from "@components/drawer";
import { changeDrawerState } from "@redux/slice/drawer/drawerSlice";
import Navbar from "@components/navbar";

import { Overlay, Box } from "@mantine/core";

interface propsType {
  children: ReactNode;
}
interface drawerProps {
  open: boolean;
}
const LayoutWrapper = styled.div`
  /* height: 100vh; */
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
`;
const DrawerContainer = styled.section<drawerProps>`
  width: 300px;

  transition: width 400ms ease;
  @media only screen and (max-width: 1200px) {
    width: ${(props) => (props.open ? "300px" : "0px")};
    position: ${(props) => (props.open ? "absolute" : "relative")};
    left: ${(props) => (props.open ? "0" : "-200%")};
    background: #fff;
    height: 100vh;
    z-index: 1000;
  }
`;
const MainContainer = styled.section`
  flex-grow: 1;
  background: #e9eff7;
  position: relative;
  padding: 20px;
  width: 100%;
`;
const Content = styled.section`
  margin-top: 5px;
  position: relative;
  border: 2px solid #cccccc;
  overflow-y: scroll;
  height: 87vh;
  overflow: auto;
  border-radius: 10px;
  width: 100%;
  padding: 20px 10px;
`;
const Footer = styled.section`
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
  width: 100%;
  bottom: 0;
  padding: 10px;
  border: 2px solid #cccc;
  text-align: center;
`;

const Layout = (props: propsType) => {
  const { children } = props;
  const drawerState = useAppSelector((state) => state.drawer.open);
  const dispatch = useAppDispatch();

  return (
    <LayoutWrapper>
      <DrawerContainer open={drawerState}>
        <Drawer open={drawerState} title="Admin Dashboard"></Drawer>
      </DrawerContainer>
      <MainContainer>
        {drawerState && <Overlay opacity={0.6} color="#000" blur={2}></Overlay>}
        <Navbar></Navbar>
        <Content>{children}</Content>
      </MainContainer>
    </LayoutWrapper>
  );
};

export default Layout;
