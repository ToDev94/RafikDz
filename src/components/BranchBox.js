import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import PageNavItem from "./PageNavItem";
import { FiFolder } from "react-icons/fi";

const BranchBox = ({ title, branchCode, queries }) => {
  const link =
    "/levels/subjects/subject/terms/" + queries.join("/") + `/${branchCode}`;
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
        {title}
      </Heading>
      <Flex
        direction="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <PageNavItem
          w="100%"
          icon={<FiFolder />}
          text="دروس"
          link={link + "/lessons"}
        />
        <PageNavItem
          w="100%"
          icon={<FiFolder />}
          text="إمتحانات و فروض"
          link={link + "/exams"}
        />
        <PageNavItem
          icon={<FiFolder />}
          w="100%"
          text="كتب مدرسية و خارجية"
          link={link + "/books"}
        />
      </Flex>
    </Flex>
  );
};

export default BranchBox;
