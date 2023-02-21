import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Layout from "../../layout";

import BranchBox from "@/components/BranchBox";
import clientPromise from "lib/mongodb";

const subject = ({ data, queries }) => {
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
          المحتوى
        </Heading>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center" gap={5} w="90%">
        {data.map((item) => (
          <BranchBox
            key={item._id}
            title={item.branchName}
            branchCode={item.branchObj}
            queries={queries}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default subject;

subject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const queries = context.query.subject;
  const collectionName = queries.join("-");

  const client = await clientPromise;
  const db = client.db("rafikdzdb");
  const resultsPromies = db
    .collection(collectionName)
    .find({ branchObj: { $exists: true } });
  const branches = await resultsPromies.toArray();
  const serializableBranches = branches.map((item) => {
    return { ...item, _id: item._id.toString() };
  });

  return {
    props: { data: serializableBranches, queries }, // will be passed to the page component as props
  };
}
