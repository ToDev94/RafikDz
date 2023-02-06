"use client";
import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={{ base: "none", md: "block" }}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Drawer
        autoFocus={false}
        isOpen={true}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        size="xs"
      >
        <DrawerContent>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
