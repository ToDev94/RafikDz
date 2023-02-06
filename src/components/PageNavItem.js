import React from "react";
import { Badge, Flex, Link, Text, Box } from "@chakra-ui/react";

const PageNavItem = ({ icon, num, text, link }) => {
  return (
    <Link
      href={link}
      _hover={{ textDecoration: "none" }}
      textDecor="none"
      w="50%"
      m="auto"
    >
      <Flex
        background="gray.700"
        alignItems="center"
        paddingLeft={4}
        borderRadius={5}
        justifyContent="space-between"
        overflow="hidden"
        transition="all 0.1s"
        _hover={{ backgroundColor: "gray.600" }}
      >
        <Badge>{num}</Badge>
        <Text color="white"> {text} </Text>
        <Box p={4} backgroundColor="teal.400">
          {icon}
        </Box>
      </Flex>
    </Link>
  );
};

export default PageNavItem;
