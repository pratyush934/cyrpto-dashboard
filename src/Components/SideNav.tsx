import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";

export const SideNav = () => {
  const navLinks = [
    {
      text: "Dashboard",
      icon: MdDashboard,
      link: "/",
    },
    {
      text: "Transactions",
      icon: GrTransaction,
      link: "/",
    },
  ];

  return (
    <Stack
      shadow={"lg"}
      direction={"column"}
      maxWidth={"300px"}
      height={"100vh"}
      justifyContent={"space-between"}
    >
      <Box>
        <Heading
          fontSize={"23px"}
          textAlign={"center"}
          marginX={"28px"}
          marginTop={"60px"}
          marginBottom={"10px"}
          textColor={"blue"}
        >
          @DOSOMECODING
        </Heading>
        <Box marginX={"12px"}>
          {navLinks.map((nav) => (
            <Box>
              <HStack
                width={"260px"}
                height={"42px"}
                marginY={"3px"}
                _hover={{ backgroundColor: "aqua", fontWeight: "bold" }}
                borderRadius={"12px"}
              >
                <Icon
                  as={nav.icon}
                  marginRight={"6px"}
                  fontSize={"20px"}
                  marginLeft={"10px"}
                />

                <Text fontSize={"22px"}>{nav.text}</Text>
              </HStack>
            </Box>
          ))}
        </Box>
      </Box>

      <Box marginBottom={"20px"} marginX={"12px"}>
        <HStack
          width={"260px"}
          height={"42px"}
          marginY={"3px"}
          _hover={{ backgroundColor: "aqua" }}
          borderRadius={"12px"}
        >
          <Icon
            as={BiSupport}
            marginRight={"6px"}
            fontSize={"20px"}
            marginLeft={"10px"}
          />
          <Text fontSize={"22px"}>{"Support"}</Text>
        </HStack>
      </Box>
    </Stack>
  );
};
