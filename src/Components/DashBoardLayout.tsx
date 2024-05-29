import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { SideNav } from "./SideNav";
import SideDrawer from "./SideDrawer";
import React from "react";

const DashBoardLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <SideNav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <NavBar title={title} onOpen={onOpen} />
          <Container
            overflowX="hidden"
            overflowY="auto"
            mt="6"
            maxW="75rem"
            bgColor={"blue"}
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashBoardLayout;
