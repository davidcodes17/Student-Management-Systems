import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import Navigation from "../../layouts/Navigation";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({
    email: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      fetch("https://student-management-system-api-l1jv.onrender.com/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setUser({ email: data.data });
        });
    } else {
      window.location.replace("/login");
    }
  }, []);
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
          Welcome Back, <br /> {user.email} 👋
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
