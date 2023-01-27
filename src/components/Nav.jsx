"use client";
import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import classes from "./Nav.module.css";
import { FiFilePlus } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Nav = ({ logoColor }) => {
  return (
    <nav className={classes.navigation}>
      <Heading color={logoColor}>RafikDZ</Heading>
      <Box className={classes.contactus}>
        <Button
          color="white"
          variant="outline"
          size={["xs", "sm"]}
          _hover={{
            background: "teal.400",
            color: "white",
          }}
          rightIcon={<FiMail />}
        >
          أتصل بنا{" "}
        </Button>
        <Button
          colorScheme="teal"
          size={["xs", "sm"]}
          rightIcon={<FiFilePlus />}
        >
          ساهم معنا
        </Button>
      </Box>
    </nav>
  );
};

export default Nav;
