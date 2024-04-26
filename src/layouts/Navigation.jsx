import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { LogoutCurve } from "iconsax-react";
import React from "react";
import { BiHome, BiSolidHome } from "react-icons/bi";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { PiBooks, PiBooksFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box>
      <Flex
        bottom={10}
        left={0}
        right={0}
        justifyContent={"center"}
        pos={"fixed"}
      >
        <Flex
          py={7}
          px={9}
          borderRadius={50}
          gap={10}
          bg={"#111"}
          backdropFilter={"blur(20px)"}
          boxShadow={"0px 0px 10px #aaa"}
          width={400}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Tooltip>
            <IconButton
              as={Link}
              to={"/admin"}
              borderRadius={20}
              icon={<BiSolidHome size={40} />}
              _hover={{ bg: "none" }}
              className="icon"
              color={"#fff !important"}
              bg={"none"}
            />
          </Tooltip>
          <IconButton
            as={Link}
            to={"/users"}
            className="icon"
            borderRadius={20}
            color={"#fff !important"}
            icon={<BsPeopleFill size={40} />}
            _hover={{ bg: "none" }}
            bg={"none"}
          />
          <IconButton
            borderRadius={20}
            color={"#fff !important"}
            icon={<PiBooksFill size={40} />}
            as={Link}
            to={"/courses"}
            className="icon"
            _hover={{ bg: "none" }}
            bg={"none"}
          />
          <IconButton
            borderRadius={20}
            as={Link}
            to={"/admin"}
            className="icon"
            color={"#fff !important"}
            icon={<LogoutCurve variant="Bold" size={40} />}
            _hover={{ bg: "none" }}
            bg={"none"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
