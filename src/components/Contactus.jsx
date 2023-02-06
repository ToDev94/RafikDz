import { Button, ButtonGroup } from "@chakra-ui/react";
import { FiFilePlus } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import React from "react";

const Contactus = () => {
  return (
    <ButtonGroup gap="2">
      <Button
        color="white"
        variant="outline"
        size={["xs", "sm"]}
        _hover={{
          background: "teal.400",
          color: "white",
        }}
        rightIcon={<FiMail />}
      >
        أتصل بنا
      </Button>
      <Button colorScheme="teal" size={["xs", "sm"]} rightIcon={<FiFilePlus />}>
        ساهم معنا
      </Button>
    </ButtonGroup>
  );
};

export default Contactus;
