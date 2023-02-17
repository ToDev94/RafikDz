import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import PageNavItem from "@/components/PageNavItem";
import { FiFolder } from "react-icons/fi";
import Layout from "./layout";

export default function Levels({ data }) {
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
      <Flex w="100%" direction="column" gap={5} alignItems="center">
        {data.map((item, i) => (
          <PageNavItem
            key={i}
            w="50%"
            link="#"
            icon={<FiFolder color="#f1f1f1" />}
            num={125}
            text={item}
          />
        ))}
      </Flex>
    </Flex>
  );
}

Levels.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { level: "secondary" } },
      { params: { level: "primary" } },
      { params: { level: "middle" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const eduLevel = context.params.level;
  const levelsData = {
    secondary: ["أولى ثانوي", "ثانية ثانوي", "ثالثة ثانوي"],
    primary: [
      "تحضيري",
      "أولى إبتدائي",
      "ثانية إبتدائي",
      "ثالثة إبتدائي",
      "رابعة إبتدائي",
      "خامسة إبتدائي",
    ],
    middle: ["أولى متوسط", "ثانية متوسط", "ثالثة متوسط", "رابعة متوسط"],
  };
  return {
    // Passed to the page component as props
    props: { data: levelsData[eduLevel] },
  };
}
