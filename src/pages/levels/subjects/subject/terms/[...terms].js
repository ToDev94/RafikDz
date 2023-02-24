import React from "react";

import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/pages/levels/layout";
import { FiFolder } from "react-icons/fi";
import PageNavItem from "@/components/PageNavItem";
import clientPromise from "lib/mongodb";

const terms = ({ termsArr, queriesLink }) => {
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
        <Heading lineHeight={2} size="xl" color="gray.700">
          الفصول
        </Heading>
      </Box>

      <Flex px={10} py={10} w="100%" gap={5} direction="column">
        {termsArr.map((ter) => (
          <PageNavItem
            key={ter._id}
            link={`/levels/subjects/subject/terms/viewcontent/${queriesLink}/ter${ter.termObj}`}
            text={ter.termName}
            icon={<FiFolder />}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default terms;

terms.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const queriesLink = context.query.terms.join("/");

  const client = await clientPromise;
  const db = client.db("rafikdzdb");
  const resultsPromies = db
    .collection("1s-ar")
    .find({ termObj: { $exists: true } });

  const branches = await resultsPromies.toArray();
  const termsArr = branches.map((item) => {
    return { ...item, _id: item._id.toString() };
  });

  return {
    props: { termsArr, queriesLink },
  };
}
