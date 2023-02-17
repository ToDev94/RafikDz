import { Flex, Button } from "@chakra-ui/react";
import { useState, React } from "react";

import { FiChevronRight, FiChevronLeft, FiSave } from "react-icons/fi";

const PdfViewer = ({ docs }) => {
  const [subNumber, setSubNumber] = useState(0);
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
    <Flex direction="column" gap={2} w="60%" h="30rem">
      <Flex justifyContent="space-between">
        <Button
          onClick={handlePrevClick}
          size={{ base: "sm", md: "md", lg: "lg" }}
          leftIcon={<FiChevronLeft />}
        >
          الموضوع السابق
        </Button>
        <Button size={{ base: "sm", md: "md", lg: "lg" }} leftIcon={<FiSave />}>
          تحميل
        </Button>

        <Button
          onClick={handleNextClick}
          size={{ base: "sm", md: "md", lg: "lg" }}
          rightIcon={<FiChevronRight />}
        >
          الموضوع التالي
        </Button>
      </Flex>
      <iframe
        src={docs[subNumber].pdfLink}
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
      <Flex></Flex>
    </Flex>
  );
};

export default PdfViewer;
