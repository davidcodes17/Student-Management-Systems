import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaHelmetSafety } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box mt={100}>
      <Flex justifyContent={"center"} textAlign={"center"}>
        <Box>
          <Heading fontSize={200} color={"#000"}>404</Heading>
          <Text>Page Not Found</Text>
          <Button as={Link} to={"/login"} mt={5} bg={"#000"} rightIcon={<FaHelmetSafety />} color={"#fff"} _hover={{bg : "#000"}} px={10} py={7} borderRadius={20}>
            Back to Safety
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default NotFound;
