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
import { Edit2, LogoutCurve } from "iconsax-react";
import { Link } from "react-router-dom";
import StudentCourseTable from "../../components/StudentCourseTable";

const StudentDashboard = () => {
  const [courses, setCourse] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    email: "",
    matrixNumber: "",
    phoneNumber: "",
    department: "",
  });

  const updateUserDetails = (id) => {
    fetch("http://localhost:8080/student/" + user.id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
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
        console.log(res);
      });
  };

  const btnRef = React.useRef();
  useEffect(() => {
    fetch("http://localhost:8080/student/" + localStorage.getItem("studentId"))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser({
          id: data.data.id,
          fullName: data.data.fullName,
          email: data.data.email,
          phoneNumber: data.data.phoneNumber,
          matrixNumber: data.data.matrixNumber,
          department: data.data.department,
        });
      });
    fetch("http://localhost:8080/course/"+localStorage.getItem("department"))
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
        <Heading>Welcome Back, {user.fullName}</Heading>
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
        <StudentCourseTable data={courses} />
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
                      setUser({ ...user, fullName: e.target.value });
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
                      setUser({ ...user, email: e.target.value });
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
                      setUser({
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
                      setUser({
                        ...user,
                        matrixNumber: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormControl my={5}>
                  <FormLabel>Department</FormLabel>
                  <Select
                    onChange={(e) => {
                      setUser({ ...user, department: e.target.value });
                    }}
                    fontSize={12}
                  >
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
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  console.log(user);
                  updateUserDetails();
                }}
                colorScheme="blue"
              >
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default StudentDashboard;
