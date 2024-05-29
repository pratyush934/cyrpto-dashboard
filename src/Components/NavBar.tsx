import { Box, Flex, Heading, HStack, Icon } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { FaUserTie } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ title, onOpen }: { title: string; onOpen: () => void }) => {
  return (
    <HStack
      shadow={"lg"}
      width={"100%"}
      height={"80px"}
      justifyContent={"space-between"}
    >
      <Flex
        as="span"
        marginLeft={"100px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box marginRight={"20px"} fontSize={"25px"} left={"0"}>
          <Icon
            as={GiHamburgerMenu}
            onClick={onOpen}
            display={{
              base: "block",
              lg: "none",
            }}
          />
        </Box>
        <Box>
          <Heading>{title}</Heading>
        </Box>
      </Flex>
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
