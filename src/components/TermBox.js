import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const TermBox = ({ terNum }) => {
  return (
    <Flex direction="column">
      <Heading> الفصل الأول </Heading>
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="gray.800"
        direction="column"
        p={10}
        borderRadius={10}
        cursor="pointer"
        transition="all 0.3s"
        outlineColor="teal.300"
        _hover={{
          bg: "gray.600",
          boxShadow: "0px 0px 10px #00AEAE",
        }}
        _active={{ bg: "gray.700" }}
      >
        <Heading
          alignItems="center"
          justifyContent="center"
          color="azure"
          size="4xl"
        >
          I
        </Heading>
      </Flex>
    </Flex>
  );
};

export default TermBox;
