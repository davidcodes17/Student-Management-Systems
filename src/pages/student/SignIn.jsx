import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  
  const SignIn = () => {
    return (
      <Box>
        <Flex justifyContent={"center"} mt={"100px"}>
          <Box width={400} boxShadow={"0px 0px 50px #eee"} p={10} borderRadius={20}>
            <Heading>Student Login</Heading>
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
                <FormLabel fontWeight={300}>Matrix Number</FormLabel>
                <Input
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
  