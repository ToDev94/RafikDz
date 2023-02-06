"use client";
import { Container, Text, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      maxW="80rem"
      paddingTop={["1rem", "3rem"]}
      px="1.5rem"
    >
      <VStack
        alignItems="flex-start"
        align="right"
        spacing={["1rem", "2rem"]}
        paddingBottom={["2rem", "4rem"]}
      >
        <Heading
          color="white"
          textAlign="right"
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        >
          المصادر التي تحتاجها في مكان واحد
        </Heading>
        <Text
          maxW="50rem"
          textAlign="right"
          alignContent="center"
          color="whiteAlpha.900"
          fontSize="md"
        >
          ما تضيعش وقتك وانت تحوس على الدروس و المواضيع, على منصتنا راح تلقى كلش
          ركز فقط على تحسين تحصيلك الدراسي
        </Text>
      </VStack>
    </Container>
  );
};

export default Hero;
