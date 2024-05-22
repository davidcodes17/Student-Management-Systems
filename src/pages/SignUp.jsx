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
import { Link } from "react-router-dom";

const SignUp = () => {
  const toast = useToast();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    fetch("https://student-management-system-api-l1jv.onrender.com/signup", {
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
        console.log(data);
        toast({
          title: "Account Created",
          description: "You've just created an acoount",
          duration: 1000,
          isClosable: true,
        });
        location.href = "/admin";
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
          <Heading>Sign Up 🧑‍💻</Heading>
          <Text fontWeight={300} fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, quas?
          </Text>
          <Box mt={5}>
            <FormControl>
              <FormLabel fontWeight={300}>Email Address</FormLabel>
              <Input height={9} fontSize={12} fontWeight={300} type="email" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Password</FormLabel>
              <Input
                height={9}
                fontSize={12}
                fontWeight={300}
                type="password"
              />
            </FormControl>
            <Text fontSize={12} textAlign={"center"} mt={5}>
              <Link to={"/login"}>Already have an account? Sign In</Link>
            </Text>
            <Button
              bg={"tomato"}
              color={"#fff"}
              _hover={{ bg: "tomato" }}
              mt={5}
              onClick={login}
              width={"100%"}
              py={6}
              borderRadius={10}
            >
              SignUp
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
