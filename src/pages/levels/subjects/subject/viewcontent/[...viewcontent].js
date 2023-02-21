import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Layout from "@/pages/levels/layout";

const viewcontent = () => {
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
    </Flex>
  );
};

export default viewcontent;

viewcontent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
