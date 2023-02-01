"use client";

import React from "react";
import classes from "./LevelPrev.module.css";
import NextLink from "next/link";
import { Box, Image, Link, VStack, Text } from "@chakra-ui/react";

const LevelPrev = ({ children }) => {
  return (
    <Link
      className={classes.prevlink}
      as={NextLink}
      display="block"
      href="./levels"
      width="fit-content"
      borderRadius="50%"
      _hover={{ textDecor: "none" }}
      data-group
    >
      <VStack>
        <Box
          display="flex"
          width="fit-content"
          borderRadius="50%"
          border="4px"
          borderStyle="solid"
          borderColor="teal.300"
          p={1}
        >
          <Box
            borderRadius="50%"
            height={["50px", "75px", "150px"]}
            width={["50px", "75px", "150px"]}
            overflow="hidden"
          >
            <Image
              className={classes.previmg}
              src="./students.jpg"
              w={["100px", "125px", "200px"]}
              maxW="none"
              objectFit="cover"
              transition={"all, 0.6s"}
              _groupHover={{ transform: "scale(1.3)" }}
            />
          </Box>
        </Box>
        <Text fontSize="xl" transition={"all, 300ms"} color="White">
          {children}
        </Text>
      </VStack>
    </Link>
  );
};

export default LevelPrev;
