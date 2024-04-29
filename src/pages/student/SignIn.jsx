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

const SignIn = () => {
  const [student, setStudent] = useState({
    email: "",
    matrixNumber: "",
  });

  const toast = useToast();

  const login = () => {
    fetch("http://localhost:8080/student-login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: student.email,
        matrixNumber: student.matrixNumber,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.data.message != "ERROR") {
          toast({
            title: "Login Success",
            description: "You've just logged In",
            duration: 1000,
            status: "success",
          });
          localStorage.setItem("studentId", data.data.id);
          localStorage.setItem("department", data.data.department);
          location.replace("/student/dashboard");
        } else {
          location.reload();
        }
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
          <Heading>Student Login</Heading>
          <Text fontWeight={300} fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, quas?
          </Text>
          <Box mt={5}>
            <FormControl>
              <FormLabel fontWeight={300}>Email Address</FormLabel>
              <Input
                value={student.email}
                onChange={(e) => {
                  setStudent({ ...student, email: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="email"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Matrix Number</FormLabel>
              <Input
                value={student.matrixNumber}
                onChange={(e) => {
                  setStudent({ ...student, matrixNumber: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="password"
              />
            </FormControl>
            <Text fontSize={12} textAlign={"center"} mt={5}>
              <Link to={"/student/register"}>Don't have an account? Sign Up</Link>
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
              Sign In
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignIn;
