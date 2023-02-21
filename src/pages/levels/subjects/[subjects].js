import React from "react";

import Layout from "../layout";

import { Flex, Box, Heading } from "@chakra-ui/react";
import PageNavItem from "@/components/PageNavItem";
import { FiFolder } from "react-icons/fi";

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
  switch (level) {
    case "1s":
      data = [
        {
          id: 1,
          name: "اللغة العربية",
          link: `subject/${level}/ar`,
        },
        {
          id: 2,
          name: "اللغة الإنجليزية",
          link: `subject/${level}/en`,
        },
        {
          id: 3,
          name: "اللغة الفرنسية",
          link: `subject/${level}/fr`,
        },
        {
          id: 4,
          name: "اللغة الامازيغية",
          link: `subject/${level}/am`,
        },
        {
          id: 5,
          name: "الرياضيات",
          link: `subject/${level}/mth`,
        },
        {
          id: 6,
          name: "العلوم الطبيعية",
          link: `subject/${level}/sn`,
        },
        {
          id: 7,
          name: "العلوم الفيزيائية",
          link: `subject/${level}/phy`,
        },
        {
          id: 8,
          name: "التاريخ و الجغرافيا",
          link: `subject/${level}/hisgeo`,
        },
        {
          id: 9,
          name: "العلوم الأسلامية",
          link: `subject/${level}/si`,
        },
        {
          id: 10,
          name: "التربية الفنية",
          link: `subject/${level}/eduart`,
        },
        {
          id: 11,
          name: "التكنولوجيا",
          link: `subject/${level}/tech`,
        },
        {
          id: 12,
          name: "الإعلام الآلي",
          link: `subject/${level}/info`,
        },
      ];
      break;
    case "2s":
    case "3s":
      data = [
        { id: 1, name: "اللغة العربية", link: "#" },
        { id: 2, name: "اللغة الإنجليزية", link: "#" },
        { id: 3, name: "اللغة الفرنسية", link: "#" },
        { id: 3, name: "اللغة الألمانية", link: "#" },
        { id: 4, name: "اللغة الامازيغية", link: "#" },
        { id: 5, name: "الرياضيات", link: "#" },
        { id: 6, name: "العلوم الطبيعية", link: "#" },
        { id: 7, name: "العلوم الفيزيائية", link: "#" },
        { id: 8, name: "التاريخ و الجغرافيا", link: "#" },
        { id: 9, name: "العلوم الأسلامية", link: "#" },
        { id: 10, name: "التربية الفنية", link: "#" },
        { id: 10, name: "هندسة كهربائية", link: "#" },
        { id: 10, name: "هندسة مدنية", link: "#" },
        { id: 10, name: "فلسفة", link: "#" },
        { id: 10, name: "هندسة طرائق", link: "#" },
        { id: 10, name: "هندسة ميكانيكية", link: "#" },
      ];
      break;

    default:
      data = [
        { id: 1, name: "اللغة العربية", link: "#" },
        { id: 2, name: "اللغة الإنجليزية", link: "#" },
        { id: 3, name: "اللغة الفرنسية", link: "#" },
        { id: 4, name: "اللغة الامازيغية", link: "#" },
        { id: 5, name: "الرياضيات", link: "#" },
        { id: 6, name: "العلوم الطبيعية", link: "#" },
        { id: 7, name: "العلوم الفيزيائية", link: "#" },
        { id: 8, name: "التاريخ و الجغرافيا", link: "#" },
        { id: 9, name: "العلوم الأسلامية", link: "#" },
        { id: 10, name: "التربية الفنية", link: "#" },
      ];
      break;
  }
  return {
    props: { data },
  };
}
