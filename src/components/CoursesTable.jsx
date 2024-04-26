import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
  Menu,
  Button,
  MenuButton,
  MenuList,
  AlertDialog,
  useToast,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as Ln } from "react-router-dom";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const CoursesTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const cancelRef = React.useRef();
  const deletecourse = (courseId) => {
    fetch("http://localhost:8080/course/" + courseId, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast({
          title: "Course Deleted",
          status: "success",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      });
  };
  return (
    <Box mt={5}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Courses Data</TableCaption>
          <Thead>
            <Tr>
              <Th>Course Title</Th>
              <Th>Course CODE</Th>
              <Th>Department</Th>
              <Th>Course Document Link</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((course) => (
              <Tr fontSize={12}>
                <Td>Introduction to Programming</Td>
                <Td>{course.courseName}</Td>
                <Td>{course.department}</Td>
                <Td>
                  <Link href={course.courseDocumentLink}>
                    {course.courseDocumentLink}
                  </Link>
                </Td>
                <Td cursor={"pointer"}>
                  {/* <BiDotsVerticalRounded /> */}
                  <Menu>
                    <MenuButton
                      as={Button}
                      bg={"none"}
                      _hover={{ bg: "none" }}
                      _focus={{ bg: "none" }}
                      rightIcon={<BiDotsVerticalRounded />}
                    ></MenuButton>
                    <MenuList>
                      <MenuItem as={Ln} to={"/edit/" + course.courseId}>
                        Edit Course
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          onOpen();
                        }}
                      >
                        Delete Course
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
                <>
                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Delete Course
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={() => {
                              onClose();
                              deletecourse(course.courseId);
                              location.reload();
                            }}
                            ml={3}
                          >
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </>
              </Tr>
            ))}
            {/* <Tr fontSize={12}>
              <Td>Introduction to Programming</Td>
              <Td>COM 216</Td>
              <Td>Computer Science</Td>
              <Td>
                <Link href="https://drive.google.com/file/d/1DqjD7q3ssZTtFcwq5alGOKheeqGMxjG3/view?usp=sharing">
                  https://drive.google.com/file/d/1DqjD7q3ssZTtFcwq5alGOKheeqGMxjG3/view?usp=sharing
                </Link>
              </Td>
              <Td cursor={"pointer"}>
                <BiDotsVerticalRounded />
                <Menu>
                  <MenuButton
                    as={Button}
                    bg={"none"}
                    _hover={{ bg: "none" }}
                    _focus={{ bg: "none" }}
                    rightIcon={<BiDotsVerticalRounded />}
                  ></MenuButton>
                  <MenuList>
                    <MenuItem as={Ln} to={"/edit/2"}>
                      Edit Course
                    </MenuItem>
                    <MenuItem onClick={onOpen}>Delete Course</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CoursesTable;
