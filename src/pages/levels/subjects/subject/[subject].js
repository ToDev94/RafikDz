import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Layout from "../../layout";
import PdfViewer from "@/components/PdfViewer";

import BranchBox from "@/components/BranchBox";

const subject = (props) => {
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
        <BranchBox />
        <BranchBox />
        <BranchBox />
      </Flex>
    </Flex>
  );
};

export default subject;

subject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
/* 
export async function getStaticPaths() {
  return {
    paths: [{ params: { subject: "test" } }],
    fallback: false, // can also be true or 'blocking'
  };
} */

/* export async function getStaticProps(context) {
   require("dotenv").config();
  const query = context.query.subject;
  const URI = process.env.MONGO_URI;
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  const client = new MongoClient(URI, options);
  const clientPromise = client.connect();
  const clientHandle = await clientPromise;
  const items = await clientHandle
    .db("rafikdzdb")
    .collection("s-islamics")
    .find({})
    .toArray();

  const serializableDocs = items.map((item) => {
    return { ...item, _id: item._id.toString() };
  });

  return {
    props: {}, // will be passed to the page component as props
  };
}
 */
