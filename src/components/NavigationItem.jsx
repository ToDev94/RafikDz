import React from "react";
import { Link, Flex, Text, Badge } from "@chakra-ui/react";
import NextLink from "next/link";

const NavigationItem = () => {
  return (
    <Link as={NextLink} href="./">
      <Flex>
        <Text> {props.children} </Text>
        <Badge>{props.num}</Badge>
      </Flex>
    </Link>
  );
};

export default NavigationItem;
