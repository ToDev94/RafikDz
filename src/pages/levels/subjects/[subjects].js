import React from "react";

import Layout from "../layout";

import { Flex, Box, Heading } from "@chakra-ui/react";
import PageNavItem from "@/components/PageNavItem";
import { FiFolder } from "react-icons/fi";
import getSubjectsObj from "helpers/SubjectsObj";

const subjects = ({ data }) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={10}
      justifyContent="flex-start"
      maxHeight="100%"
      margin={0}
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundImage="linear-gradient(to right, #3db6b3, #3b9b99, #3db6b3)"
      >
        <Heading lineHeight={2} size="2xl" color="gray.700">
          المواد
        </Heading>
      </Box>

      <Flex
        flexWrap="wrap"
        dir="rtl"
        gap={5}
        maxW="70rem"
        m="0"
        justifyContent="space-around"
        maxH="100%"
        alignItems="center"
        px={5}
      >
        {data.map((item) => (
          <PageNavItem
            key={item.id}
            dir="row-reverse"
            w={{ base: "100%", md: "100%", lg: "25rem" }}
            link={item.link}
            icon={<FiFolder color="#f1f1f1" />}
            num={125}
            text={item.name}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default subjects;

subjects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { subjects: "2s" } },
      { params: { subjects: "1s" } },
      { params: { subjects: "3s" } },
      { params: { subjects: "4m" } },
      { params: { subjects: "3m" } },
      { params: { subjects: "2m" } },
      { params: { subjects: "1m" } },
      { params: { subjects: "5p" } },
      { params: { subjects: "4p" } },
      { params: { subjects: "3p" } },
      { params: { subjects: "2p" } },
      { params: { subjects: "1p" } },
      { params: { subjects: "pr" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  let data;
  const level = context.params.subjects;
  data = getSubjectsObj(level);
  return {
    props: { data },
  };
}
