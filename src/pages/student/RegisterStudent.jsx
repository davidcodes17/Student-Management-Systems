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
import React from "react";

const RegisterStudnet = () => {
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
              <Input height={9} fontSize={12} fontWeight={300} type="text" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Email</FormLabel>
              <Input height={9} fontSize={12} fontWeight={300} type="email" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Matix Number</FormLabel>
              <Input height={9} fontSize={12} fontWeight={300} type="text" />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel fontWeight={300}>Phone Number</FormLabel>
              <Input height={9} fontSize={12} fontWeight={300} type="tel" />
            </FormControl>
            <Select mt={5}>
                <option>Computer Science</option>
                <option>Computer Engineering</option>
                <option>Electical Engineering</option>
                <option>Business Administration</option>
                <option>Accounting</option>
            </Select>
            <Button
              bg={"tomato"}
              color={"#fff"}
              _hover={{ bg: "tomato" }}
              mt={5}
              width={"100%"}
              py={6}
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
