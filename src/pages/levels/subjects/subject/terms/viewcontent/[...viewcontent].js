import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@/pages/levels/layout";
import PdfViewer from "@/components/PdfViewer";

import PageNavItem from "@/components/PageNavItem";
import { FiFileText } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import clientPromise from "lib/mongodb";

const Viewcontent = ({ docs, currentDocId, queries }) => {
  const currentDocIndex = currentDocId
    ? docs.findIndex((doc) => doc._id === currentDocId)
    : 0;

  const router = useRouter();
  const baseRoute = queries.join("/");
  const [currentDocNum, setCurrentDocNum] = useState(currentDocIndex);

  useEffect(() => {
    router.push(`${baseRoute}/${docs[currentDocNum]._id}`, undefined, {
      shallow: true,
    });
  }, [currentDocNum]);

  const handleNextClick = () => {
    if (subNumber < docs.length - 1) {
      setSubNumber((prevSub) => prevSub + 1);
    }
    return;
  };
  const handlePrevClick = () => {
    if (subNumber > 0) {
      setSubNumber((prevSub) => prevSub - 1);
    }
    return;
  };

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
          عرض المحتويات
        </Heading>
      </Box>
      <PdfViewer
        nextBtn={handleNextClick}
        prevBtn={handlePrevClick}
        doc={docs[currentDocNum]}
      />
      <Flex px={10} py={10} w="100%" direction="column" gap={5}>
        {docs.map((doc) => (
          <PageNavItem
            active={true}
            key={doc._id}
            text={doc.title}
            w="100%"
            num={doc.year}
            icon={<FiFileText />}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Viewcontent;

Viewcontent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const queries = context.query.viewcontent;
  const collectionName = queries.slice(0, 2).join("-");
  const currentDocId = queries[5] || "";

  const client = await clientPromise;
  const db = client.db("rafikdzdb");
  const rawDocs = await db
    .collection(collectionName)
    .find({
      grade: queries[0],
      subject: queries[1],
      branchCode: queries[2],
      type: queries[3],
      term: queries[4],
    })
    .toArray();

  const docs = rawDocs.map((item) => {
    return { ...item, _id: item._id.toString() };
  });

  console.log(docs);

  return {
    props: { docs, currentDocId, queries },
  };
}

/* {
  grade: "1s",
  subject: "ar",
  branchName: "جذع مشترك علوم و تكنولوجيا",
  branchCode: "sc",
  type: "lesson",
  term: "ter1",
  pdfLink:
    "https://drive.google.com/file/d/1tFh8YMVPekoL-jHSHR0OzgMb-tDYD1bZ/preview",
}, */
