import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterStudnet = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    matrixNumber: "",
    phoneNumber: "",
    department: "",
  });

  const createAccount = () => {
    fetch("https://student-management-system-api-l1jv.onrender.com/student", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        fullName: user.fullName,
        email: user.email,
        matrixNumber: user.matrixNumber,
        phoneNumber: user.phoneNumber,
        department: user.department,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.data.message != "ERROR") {
          toast({
            title: "Account Created Successfully",
            description: "You've just created an account",
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
      <Flex justifyContent={"center"} mt={"50px"}>
        <Box
          width={400}
          boxShadow={"0px 0px 50px #eee"}
          p={10}
          borderRadius={20}
        >
          <Heading>Registeration</Heading>
          <Text fontWeight={300} fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus, quas?
          </Text>
          <Box mt={5}>
            <FormControl>
              <FormLabel fontWeight={300}>Full Name</FormLabel>
              <Input
                value={user.fullName}
                onChange={(e) => {
                  setUser({ ...user, fullName: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="text"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Email</FormLabel>
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
              <FormLabel fontWeight={300}>Matix Number</FormLabel>
              <Input
                value={user.matrixNumber}
                onChange={(e) => {
                  setUser({ ...user, matrixNumber: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="text"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Phone Number</FormLabel>
              <Input
                value={user.phoneNumber}
                onChange={(e) => {
                  setUser({ ...user, phoneNumber: e.target.value });
                }}
                height={9}
                fontSize={12}
                fontWeight={300}
                type="tel"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Department</FormLabel>
              <Select
                value={user.department}
                onChange={(e) => {
                  setUser({ ...user, department: e.target.value });
                }}
                mt={5}
              >
                <option value={"Computer Science"}>Computer Science</option>
                <option value={"Computer Engineering"}>
                  Computer Engineering
                </option>
                <option value={"Electical Engineering"}>
                  Electical Engineering
                </option>
                <option value={"Business Administration"}>
                  Business Administration
                </option>
                <option value={"Accounting"}>Accounting</option>
              </Select>
            </FormControl>
            <Text fontSize={12} textAlign={"center"} mt={5}>
              <Link to={"/student/login"}>
                Already have an account? Sign Up
              </Link>
            </Text>
            <Button
              bg={"tomato"}
              color={"#fff"}
              _hover={{ bg: "tomato" }}
              mt={5}
              width={"100%"}
              py={6}
              onClick={() => {
                console.log(user);
                createAccount();
                location.replace("/student/dashboard");
              }}
              borderRadius={10}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default RegisterStudnet;
