import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    fetch("http://localhost:8080/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.data.length > 50
          ? (location.href = "/admin") && localStorage.setItem("token",data.data)
          : toast({
              title: "Login Failed",
              description: "Wrong Credentials",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
        console.log(data);
      });
  };
  return (
    <Box>
      <Flex justifyContent={"center"} mt={"100px"}>
        <Box
          width={400}
          boxShadow={"0px 0px 50px #eee"}
          p={10}
          borderRadius={20}
        >
          <Heading>Login 🚀</Heading>
          <Text fontWeight={300} fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, quas?
          </Text>
          <Box mt={5}>
            <FormControl>
              <FormLabel fontWeight={300}>Email Address</FormLabel>
              <Input
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="email"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Password</FormLabel>
              <Input
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="password"
              />
            </FormControl>
            <Button
              bg={"tomato"}
              color={"#fff"}
              _hover={{ bg: "tomato" }}
              mt={5}
              width={"100%"}
              onClick={login}
              py={6}
              borderRadius={10}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
