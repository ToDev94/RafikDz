import { Flex, Button } from "@chakra-ui/react";
import { useState, React } from "react";

import { FiChevronRight, FiChevronLeft, FiSave } from "react-icons/fi";

const PdfViewer = ({ doc, nextBtn, prevBtn }) => {
  return (
    <Flex direction="column" gap={2} w="60%" h="30rem">
      <Flex justifyContent="space-between">
        <Button
          onClick={prevBtn}
          size={{ base: "sm", md: "md", lg: "lg" }}
          leftIcon={<FiChevronLeft />}
        >
          الموضوع السابق
        </Button>
        <Button size={{ base: "sm", md: "md", lg: "lg" }} leftIcon={<FiSave />}>
          تحميل
        </Button>

        <Button
          onClick={nextBtn}
          size={{ base: "sm", md: "md", lg: "lg" }}
          rightIcon={<FiChevronRight />}
        >
          الموضوع التالي
        </Button>
      </Flex>
      <iframe
        src={doc.pdfLink}
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
      <Flex></Flex>
    </Flex>
  );
};

export default PdfViewer;
