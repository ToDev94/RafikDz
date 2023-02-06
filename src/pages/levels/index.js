import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import PageNavItem from "@/components/PageNavItem";
import { FiFolder } from "react-icons/fi";
import Layout from "./layout";

export default function Levels() {
  return (
    <Flex direction="column" alignItems="center" gap={10}>
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
      <Flex w="100%" direction="column" gap={5}>
        <PageNavItem
          link="#"
          icon={<FiFolder color="#f1f1f1" />}
          num={125}
          text="أولى ثانوي"
        />
        <PageNavItem
          link="#"
          icon={<FiFolder color="#f1f1f1" />}
          num={125}
          text="ثانية ثانوي"
        />
        <PageNavItem
          link="#"
          icon={<FiFolder color="#f1f1f1" />}
          num={125}
          text="ثالثة ثانوي"
        />
      </Flex>
    </Flex>
  );
}

Levels.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
