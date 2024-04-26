import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CoursesTable from "../../components/CoursesTable";
import { Edit2, LogoutCurve } from "iconsax-react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [courses, setCourse] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    matrixNumber: "",
    phoneNumber: "",
    department: "",
  });
  const btnRef = React.useRef();
  useEffect(() => {
    fetch("http://localhost:8080/course/Computer Science")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourse(data);
      });
  }, []);
  return (
    <Box>
      <Box p={20}>
        <Heading>Welcome Back, DC</Heading>
        <Text>Here are list of courses for your registered department</Text>
        <Flex gap={5}>
          <Button
            my={2}
            fontSize={12}
            fontWeight={400}
            bg={"#000"}
            onClick={onOpen}
            color={"#fff"}
            leftIcon={<Edit2 variant="Bold" size={15} />}
            _hover={{ bg: "#000" }}
          >
            Edit my Details
          </Button>
          <Button
            my={2}
            as={Link}
            to={"/student/login"}
            fontSize={12}
            fontWeight={400}
            bg={"#000"}
            onClick={onOpen}
            color={"#fff"}
            leftIcon={<LogoutCurve variant="Bold" size={15} />}
            _hover={{ bg: "#000" }}
          >
            Logout
          </Button>
        </Flex>
        <CoursesTable data={courses} />
      </Box>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Update my Details</DrawerHeader>

            <DrawerBody>
              <Box>
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder="Areegbe David"
                    fontSize={12}
                    value={user.fullName}
                    onChange={(e) => {
                      setCourse({ ...user, fullName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl my={5}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="areegbedavid@gmail.com"
                    fontSize={12}
                    value={user.email}
                    onChange={(e) => {
                      setCourse({ ...user, email: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Matrix Number</FormLabel>
                  <Input
                    placeholder="R2022/620/004"
                    fontSize={12}
                    value={user.matrixNumber}
                    onChange={(e) => {
                      setCourse({
                        ...user,
                        matrixNumber: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormControl my={5}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    placeholder="+234"
                    fontSize={12}
                    value={user.phoneNumber}
                    onChange={(e) => {
                      setCourse({
                        ...user,
                        matrixNumber: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormControl my={5}>
                  <FormLabel>Department</FormLabel>
                  <Select fontSize={12}>
                    <option>Computer Engineering</option>
                    <option>Electical Engineering</option>
                    <option>Business Administration</option>
                    <option>Accounting</option>
                  </Select>
                </FormControl>
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default StudentDashboard;
