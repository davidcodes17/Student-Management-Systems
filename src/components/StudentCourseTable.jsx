import { Box, Link, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

const StudentCourseTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [id, setId] = useState(null);
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
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StudentCourseTable;
