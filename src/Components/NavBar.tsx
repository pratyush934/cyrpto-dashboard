import { Box, Heading, HStack, Icon } from "@chakra-ui/react";

import {
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";

import { FaUserTie } from "react-icons/fa6";

const NavBar = () => {
  return (
    <HStack
      shadow={"lg"}
      width={"100%"}
      height={"80px"}
      justifyContent={"space-between"}
    >
      <Box as="span" marginLeft={"100px"}>
        <Heading>Dashboard</Heading>
      </Box>
      <Box marginRight={"80px"}>
        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize={"30px"} />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default NavBar;
