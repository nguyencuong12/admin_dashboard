import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, Notification, Menu2, Router } from "tabler-icons-react";
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { changeDrawerState, close } from "@redux/slice/drawer/drawerSlice";
import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";
import Link from "next/link";
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
  <Link href={item.href} key={index}>
    <a>{item.title}</a>
  </Link>
  // <Anchor href={item.href} key={index}>
  //   {item.title}
  // </Anchor>
));

const NavBread = styled.section``;

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const drawerStatus = useAppSelector((state) => state.drawer.open);
  const { width } = useViewportSize();
  const [laptopView, setLaptopView] = useState(false);
  const [searchQuery, setSearchQuery] = useState();
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

        <Input
          onKeyDown={(e: any) => {
            if (e.keyCode === 13) {
              router.push(`/search/${searchQuery}`);
            }
          }}
          icon={<Search size={20} fontSize={"md"} />}
          size={"sm"}
          radius="xl"
          onChange={(e: any) => {
            setSearchQuery(e.target.value);
          }}
        ></Input>

        <Link href="/product/create">
          <ActionIcon style={{ marginLeft: "10px" }} size={"sm"} variant="transparent">
            <Notification></Notification>
          </ActionIcon>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default Navbar;
