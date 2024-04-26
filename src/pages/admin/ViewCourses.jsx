import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  Input,
  Spinner,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navigation from "../../layouts/Navigation";
import CoursesTable from "../../components/CoursesTable";
import { AddCircle, SearchNormal } from "iconsax-react";

const ViewCourses = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    courseName: "",
    department: "",
    courseDocumentLink: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  useEffect(() => {
    fetch("http://localhost:8080/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourses(data);
      });
  }, []);
  const filteredData = courses.filter(
    (item) =>
      item.courseName.toLowerCase().includes(search.toLowerCase()) ||
      item.department.toLowerCase().includes(search.toLowerCase()) ||
      item.courseDocumentLink.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box p={{ lg: 20, md: 20, sm: 10, base: 10 }}>
      <Box>
        <Heading>View Courses</Heading>
        <Flex
          alignItems={"center"}
          gap={2}
          //   border={"2px solid #ddd"}
          mt={5}
          pl={4}
          borderRadius={10}
        >
          {!loading ? <SearchNormal size={20} /> : <Spinner size={"sm"} />}
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
              e.target.value.length > 0 ? setLoading(true) : setLoading(false);
            }}
            placeholder="Search courses"
            border={0}
            fontSize={12}
            _focus={{ boxShadow: "none" }}
          />
          <Button
            px={10}
            bg={"#000"}
            color={"#fff"}
            _hover={{ bg: "#000" }}
            ref={btnRef}
            onClick={onOpen}
            leftIcon={<AddCircle />}
          >
            Add Course
          </Button>
        </Flex>
        <CoursesTable data={filteredData} />
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
            <DrawerHeader>Add New Course</DrawerHeader>

            <DrawerBody>
              <Box>
                <FormControl>
                  <FormLabel>Course Name</FormLabel>
                  <Input
                    placeholder="COM 213"
                    fontSize={12}
                    value={course.courseName}
                    onChange={(e) => {
                      setCourse({ ...course, courseName: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl my={5}>
                  <FormLabel>Department</FormLabel>
                  <Input
                    placeholder="Computer Science"
                    fontSize={12}
                    value={course.department}
                    onChange={(e) => {
                      setCourse({ ...course, department: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Course Document Link</FormLabel>
                  <Input
                    placeholder="https://testdoc.com/js-tutorial.pdf"
                    fontSize={12}
                    value={course.courseDocumentLink}
                    onChange={(e) => {
                      setCourse({ ...course, courseDocumentLink: e.target.value });
                    }}
                  />
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
      <Navigation />
    </Box>
  );
};

export default ViewCourses;
