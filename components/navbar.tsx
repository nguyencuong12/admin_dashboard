import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, Notification, Menu2 } from "tabler-icons-react";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { changeDrawerState, close } from "@redux/slice/drawer/drawerSlice";
import { useViewportSize } from "@mantine/hooks";

import { Breadcrumbs, Anchor, Box, Input, ActionIcon } from "@mantine/core";
const Wrapper = styled.div`
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
const items = [
  { title: "Dashboard", href: "/" },
  { title: "Main Dashboard", href: "/" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const NavBread = styled.section``;

const Navbar = () => {
  const dispatch = useAppDispatch();
  const drawerStatus = useAppSelector((state) => state.drawer.open);
  const { width } = useViewportSize();
  const [laptopView, setLaptopView] = useState(false);
  useEffect(() => {
    console.log("width", width);
    if (width <= 1200) {
      setLaptopView(true);
    } else {
      setLaptopView(false);
      dispatch(close());
    }
  }, [width]);
  return (
    <Wrapper>
      <NavBread>
        <Breadcrumbs>{items}</Breadcrumbs>
      </NavBread>
      <Box
        sx={(theme: any) => ({
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.sm,
          borderRadius: theme.radius.lg,
          cursor: "pointer",

          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        })}
      >
        {laptopView && (
          <ActionIcon
            style={{ marginRight: "10px" }}
            size={"sm"}
            variant="transparent"
            onClick={() => {
              dispatch(changeDrawerState());
            }}
          >
            <Menu2></Menu2>
          </ActionIcon>
        )}

        <Input icon={<Search size={20} fontSize={"md"} />} size={"sm"} radius="xl"></Input>
        <ActionIcon style={{ marginLeft: "10px" }} size={"sm"} variant="transparent">
          <Notification></Notification>
        </ActionIcon>
      </Box>
    </Wrapper>
  );
};

export default Navbar;
