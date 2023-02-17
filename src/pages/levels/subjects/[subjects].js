import React from "react";

import Layout from "../layout";

import { Flex, Box, Heading } from "@chakra-ui/react";
import PageNavItem from "@/components/PageNavItem";
import { FiFolder } from "react-icons/fi";

const subjects = (props) => {
  const navList = [
    { id: 1, subjectName: "علوم اسلامية" },
    { id: 2, subjectName: "علوم فيزيائية" },
    { id: 3, subjectName: "علوم اسلامية" },
    { id: 4, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
    { id: 5, subjectName: "علوم اسلامية" },
  ];
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
      >
        {navList.map((item) => (
          <PageNavItem
            key={item.id}
            dir="row-reverse"
            w={["20rem", "25rem", "30rem"]}
            link="#"
            icon={<FiFolder color="#f1f1f1" />}
            num={125}
            text={item.subjectName}
          />
        ))}
        {navList.map((item) => (
          <PageNavItem
            key={item.id}
            dir="row-reverse"
            w={["20rem", "25rem", "30rem"]}
            link="#"
            icon={<FiFolder color="#f1f1f1" />}
            num={125}
            text={item.subjectName}
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

/* export async function getStaticPaths() {
  return {
    paths: [{ params: { subjects: "math" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const docRef = doc(db, "primary", "preschool");
  const docSnap = await getDoc(docRef);
  console.log("Document data:", docSnap.data());

  return {
    props: { levels: docSnap.data() },
  };
} */
