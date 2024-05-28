import { Flex } from "@chakra-ui/react";
import NavBar from "../../Components/NavBar";
import { SideNav } from "../../Components/SideNav";

function DashBoard() {
  return (
    <Flex >
      <SideNav />
      <NavBar />
    </Flex>
  );
}

export default DashBoard;
