import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { ArrowLeft } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    courseName: "",
    department: "",
    courseDocumentLink: "",
  });

  const updateCourse = () => {
    fetch("http://localhost:8080/course/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        courseName: course.courseName,
        department: course.department,
        courseDocumentLink: course.courseDocumentLink,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/get-course/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourse({
          courseName: data.data.courseName,
          department: data.data.department,
          courseDocumentLink: data.data.courseDocumentLink,
        });
      });
  }, []);
  return (
    <Box p={40}>
      <Flex mb={5} alignItems={"center"} gap={2}>
        <IconButton
          aria-label="back-button"
          borderRadius={40}
          bg={"#000"}
          onClick={() => {
            window.history.back()
          }}
          color={"#fff"}
          icon={<ArrowLeft />}
        />
        <Heading fontSize={20}>Edit Course</Heading>
      </Flex>
      <Box>
        <FormControl>
          <FormLabel>Course Name</FormLabel>
          <Input
            value={course.courseName}
            onChange={(e) => {
              setCourse({ ...course, courseName: e.target.value });
            }}
          />
        </FormControl>
        <FormControl my={5}>
          <FormLabel>Department</FormLabel>
          <Input
            value={course.department}
            onChange={(e) => {
              setCourse({ ...course, department: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Course Document Link</FormLabel>
          <Input
            value={course.courseDocumentLink}
            onChange={(e) => {
              setCourse({ ...course, courseDocumentLink: e.target.value });
            }}
          />
        </FormControl>
        <Button
          mt={5}
          bg={"#000"}
          color={"#fff"}
          fontWeight={400}
          px={10}
          py={7}
          onClick={updateCourse}
          borderRadius={20}
          _hover={{ bg: "#000" }}
        >
          Update Details
        </Button>
      </Box>
    </Box>
  );
};

export default EditCourse;
