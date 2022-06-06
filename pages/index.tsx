import React from "react";
import { useAppSelector } from "@redux/hook";
import styled from "styled-components";
import { Group, Button, ActionIcon } from "@mantine/core";
import { Adjustments, CurrencyDollar, UserCircle } from "tabler-icons-react";
import TeamTableComponent from "@components/teamMember/table";
const Box = styled.section`
  width: 250px;
  height: 100px;
  border-radius: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .description {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 980px) {
    width: 80%;
  }
`;
const BoxInfo = styled.div`
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const TeamMember = styled.div`
  background: #fff;
  height: 400px;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const Home = () => {
  const drawerStatus = useAppSelector((state) => state.drawer.open);
  console.log("draw", drawerStatus);
  return (
    <div>
      <BoxInfo>
        <Box>
          <div className="icon">
            <Adjustments size={40}></Adjustments>
          </div>
          <div className="description">
            <span>Thu nhập </span>
            <span> $350.4</span>
          </div>
        </Box>
        <Box>
          <div className="icon">
            <CurrencyDollar size={40}></CurrencyDollar>
          </div>
          <div className="description">
            <span>Chi tiêu trong tháng </span>
            <span> $350.4</span>
          </div>
        </Box>
        <Box>
          <div className="icon">
            <UserCircle size={40}></UserCircle>
          </div>
          <div className="description">
            <span>Lượt truy cập website</span>
            <span> $350.4</span>
          </div>
        </Box>
        <Box>
          <div className="icon">
            <Adjustments size={40}></Adjustments>
          </div>
          <div className="description">
            <span>Tổng tiền đã bán được </span>
            <span> $350.4</span>
          </div>
        </Box>
      </BoxInfo>
      <TeamMember>
        <TeamTableComponent></TeamTableComponent>
      </TeamMember>
    </div>
  );
};

export default Home;
