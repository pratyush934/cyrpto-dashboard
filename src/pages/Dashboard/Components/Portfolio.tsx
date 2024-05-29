import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoInformationCircleSharp } from "react-icons/io5";

const PortfolioSection = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      borderRadius={"10px"}
      border={"2px"}
      height={"10rem"}
    >
      <Stack margin={"5px"} marginLeft={"15px"} justifyContent={"space-evenly"}>
        <HStack color={"black.80"}>
          <Text
            fontSize={"sm"}
            fontFamily={"ubuntu"}
            fontWeight={"bold"}
            color={"aqua"}
          >
            Total Portfolio Value
          </Text>
          <Icon
            as={IoInformationCircleSharp}
            textColor={"aqua"}
            fontSize={"20px"}
          />
        </HStack>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          textStyle={"h2"}
          as={"h2"}
          fontSize={"30px"}
        >
          $112,312.24
        </Text>
      </Stack>
      <Stack justifyContent={"space-evenly"}>
        <Text>Wallte Balances</Text>
        <HStack justifyContent={"space-evenly"}>
          <Text>22.3940100</Text>
          <Text>$1,300.00</Text>
        </HStack>
      </Stack>
      <HStack>
        <Heading>Hello I am Pratyush</Heading>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
