import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} p={5}>
        <Heading>SMS</Heading>
        <Avatar name="Areegbe David" />
      </Flex>
    </Box>
  );
};

export default Header;
