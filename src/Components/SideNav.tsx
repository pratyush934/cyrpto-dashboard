import { Box, Flex } from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
function SideNav() {
  return (
    <Box
      as="h2"
      position={"fixed"}
      top={"0px"}
      bottom={"0px"}
      width={"40vh"}
      borderRight={"1.5px solid"}
      borderColor={"blue"}
      padding={"10px"}
    >
      <Flex
        as={"div"}
        fontWeight={"bold"}
        color={"blue"}
        justifyContent={"center"}
        alignItems={"center"}
        marginLeft={"20px"}
        height={"5vh"}
        fontSize={"20px"}
        marginTop={"15px"}
      >
        @CRYPTO-DASHBOARD
      </Flex>
      <Flex
        as={"div"}
        fontSize={"20px"}
        marginTop={"10px"}
        justifyContent={"start"}
        alignItems={"center"}
        height={"5vh"}
        // border={"2px solid"}
        borderRadius={"10px"}
        padding={"4px"}
        _hover={{
          backgroundColor: "aqua",
        }}
      >
        <BiSolidDashboard />
        <Box as="h1" marginLeft={"20px"} fontSize={"20px"} fontWeight={"bold"}>
          DashBoard
        </Box>
      </Flex>
      <Flex
        as={"div"}
        fontSize={"20px"}
        justifyContent={"start"}
        alignItems={"center"}
        height={"5vh"}
        // border={"2px solid"}
        borderRadius={"10px"}
        padding={"4px"}
        _hover={{
          backgroundColor: "aqua",
        }}
        marginTop={"3px"}
      >
        <GrTransaction />
        <Box as="h1" marginLeft={"20px"} fontSize={"20px"} fontWeight={"bold"}>
          Transactions
        </Box>
      </Flex>
    </Box>
  );
}

export default SideNav;
