"use client";
import {
  Flex,
  Heading,
  Container,
  Box,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
  Button,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Badge,
} from "@chakra-ui/react";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { FiMenu, FiLink } from "react-icons/fi";
import Contactus from "@/components/Contactus";

const layout = ({ children }) => {
  return (
    <main>
      <Flex h="100vh">
        <Flex flexDirection="column" bg="white" flex={4}>
          <Nav />
          {children}
        </Flex>

        <SideBar />
      </Flex>
    </main>
  );
};

export default layout;

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW="80rem">
      <Flex p="1rem" alignItems="center" justifyContent="space-between">
        <Heading size="md" color="teal.500" textAlign="left">
          StudyDZ
        </Heading>

        <Center
          visibility={{ base: "visible", md: "hidden" }}
          as={Button}
          colorScheme="teal"
          variant="solid"
          borderRadius="3px"
          onClick={onOpen}
        >
          <FiMenu />
        </Center>
        <Navigation isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Container>
  );
};

const Navigation = ({ isOpen, onClose }) => {
  return (
    <Drawer
      autoFocus={false}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      returnFocusOnClose={false}
      size="xs"
      colorScheme="cyan"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Contactus />
        </DrawerHeader>
        <DrawerBody>
          <SideBarContent />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const SideBar = () => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      flex={0.2}
      flexBasis="15rem"
      bg="gray.700"
      py={4}
      justifyContent="center"
    >
      <Flex w="100%" gap={2} flexDirection="column" alignItems="center">
        <Contactus />
        <SideBarContent />
      </Flex>
    </Flex>
  );
};

const SideBarContent = () => {
  return (
    <Flex w="100%" direction="column" py="1rem">
      <ArabicAccordion />
    </Flex>
  );
};

const ArabicAccordion = () => {
  return (
    <Accordion color="whiteAlpha.700" dir="rtl" variant="custom" allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box
            as="span"
            justifyContent="space-between"
            display="flex"
            flex="1"
            textAlign="right"
            alignItems="center"
            px={3}
          >
            <Text>الثانوي</Text>
            <Badge> 121 </Badge>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel textAlign="right" w="100%" p={0}>
          <Flex direction="column" gap={1}>
            <NavigationItem num={8123}> الأولى ثانوي </NavigationItem>
            <NavigationItem num={4523}> الثانية ثانوي </NavigationItem>
            <NavigationItem num={2423}> الثالثة ثانوي </NavigationItem>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const NavigationItem = (props) => {
  const { children, num } = props;
  return (
    <Link
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      href="#"
      w="100%"
      transition="all 0.3s"
      _hover={{ bg: "gray.600" }}
      px={2}
      py={2}
    >
      <Flex alignItems="center" gap={4}>
        <FiLink />
        <Text size="xs">{children}</Text>
      </Flex>
      <Badge colorScheme="teal">{num}</Badge>
    </Link>
  );
};
