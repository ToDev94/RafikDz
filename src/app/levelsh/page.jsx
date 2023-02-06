"use client";
import React from "react";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const page = () => {
  return (
    <Flex>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundImage="linear-gradient(to right, #3db6b3, #3b9b99, #3db6b3)"
      >
        <Heading lineHeight={2} size="2xl" color="gray.700">
          الثانوي
        </Heading>
      </Box>
    </Flex>
  );
};

export default page;
