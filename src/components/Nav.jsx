"use client";
import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";
import classes from "./Nav.module.css";
import Contactus from "./Contactus";

const Nav = ({ logoColor }) => {
  return (
    <nav className={classes.navigation}>
      <Heading color={logoColor}>RafikDZ</Heading>
      <Contactus />
    </nav>
  );
};

export default Nav;
