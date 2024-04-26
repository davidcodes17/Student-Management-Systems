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
} from "@chakra-ui/react";
import React from "react";

const UsersTable = ({ data }) => {
  return (
    <Box mt={5}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Student Data</TableCaption>
          <Thead>
            <Tr>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th isNumeric>Phone Number</Th>
              <Th>Matrix Number</Th>
              <Th>Department</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((student) => (
              <Tr>
                <Td>{student.fullName}</Td>
                <Td>{student.email}</Td>
                <Td isNumeric>{student.phoneNumber}</Td>
                <Td>{student.matrixNumber}</Td>
                <Td>{student.department}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersTable;
