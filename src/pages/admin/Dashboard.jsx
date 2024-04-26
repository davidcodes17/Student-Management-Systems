import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../../layouts/Header";
import Navigation from "../../layouts/Navigation";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box
      bgImage={"url('/bg.png')"}
      backdropFilter={"blur(20px)"}
      width={"100%"}
      pos={"relative"}
      height={"100vh"}
    >
      <Box
        bg={"transparent"}
        width={"100%"}
        height={"100%"}
        backdropFilter={"blur(30px)"}
      >
        <Header />
        <Heading
          fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
          textAlign={"center"}
          mt={20}
        >
          Welcome Back, Areegbe 👋
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={{ lg: 20, md: 20, sm: 15, base: 15 }}
          mt={2}
        >
          Use the navigation buttons to navigate through
        </Text>
        <Flex justifyContent={"center"} mt={5}>
          <Button
            as={Link}
            to={"/login"}
            bg={"#111"}
            color={"#fff"}
            _hover={{ bg: "#111" }}
            px={20}
            borderRadius={20}
            py={7}
          >
            Logout
          </Button>
        </Flex>
        <Navigation />
      </Box>
    </Box>
  );
};

export default Dashboard;
