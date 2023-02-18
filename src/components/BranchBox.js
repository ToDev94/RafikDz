import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PageNavItem from "./PageNavItem";
import { FiFolder } from "react-icons/fi";

const BranchBox = () => {
  return (
    <Flex
      direction="column"
      gap={5}
      borderRadius={5}
      border="2px"
      borderColor="chakra-border-color"
      justifyContent="stretch"
      alignItems="center"
      px={10}
      paddingBottom={4}
      w="100%"
    >
      <Heading
        maxWidth="30rem"
        borderRadius={5}
        border="1px"
        borderColor="teal.500"
        size={{ base: "md", md: "lg" }}
        bg="teal.300"
        color="teal.800"
        px={4}
        textAlign="center"
      >
        أولى جذع مشترك علوم وتكنولوجيا
      </Heading>
      <Flex
        direction="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <PageNavItem w="100%" icon={<FiFolder />} text="دروس" />
        <PageNavItem w="100%" icon={<FiFolder />} text="إمتحانات و فروض" />
        <PageNavItem icon={<FiFolder />} w="100%" text="كتب مدرسية و خارجية" />
      </Flex>
    </Flex>
  );
};

export default BranchBox;
