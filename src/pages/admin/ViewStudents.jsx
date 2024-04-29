import { Box, Flex, Heading, Input, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navigation from "../../layouts/Navigation";
import { SearchNormal } from "iconsax-react";
import UsersTable from "../../components/UsersTable";

const ViewStudents = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      fetch("http://localhost:8080/students")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setStudents(data);
        });
    } else {
      window.location.replace("/login");
    }
  }, []);
  const filteredData = students.filter(
    (item) =>
      item.fullName.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
      item.matrixNumber.toLowerCase().includes(search.toLowerCase()) ||
      item.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={{ lg: 20, md: 20, sm: 10, base: 10 }}>
      <Box>
        <Heading>View Students</Heading>
        <Flex
          alignItems={"center"}
          gap={2}
          border={"2px solid #ddd"}
          px={5}
          py={1}
          mt={5}
          borderRadius={10}
        >
          {!loading ? <SearchNormal size={20} /> : <Spinner size={"sm"} />}
          <Input
            onChange={(e) => {
              setSearch(e.target.value);
              e.target.value.length > 0 ? setLoading(true) : setLoading(false);
            }}
            placeholder="Search student"
            border={0}
            fontSize={12}
            _focus={{ boxShadow: "none" }}
          />
        </Flex>
        <UsersTable data={filteredData} />
      </Box>
      <Navigation />
    </Box>
  );
};

export default ViewStudents;
