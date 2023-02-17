import classes from "./page.module.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LevelPrev from "@/components/LevelPrev";

import { FiChevronRight } from "react-icons/fi";

import {
  ChakraProvider,
  Box,
  VStack,
  Container,
  SimpleGrid,
  Button,
  Center,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={classes.main}>
      <VStack
        flexGrow={0}
        flexBasis="auto"
        flexShrink={1}
        as="section"
        align="stretch"
        className={classes.upper}
      >
        <Box className={classes.upper}>
          <Nav logoColor="white" />
          <Hero />
          <SimpleGrid
            m="auto"
            maxW="55rem"
            gridRowGap="1rem"
            gridColumnGap="1rem"
            minChildWidth={["100px", "150px", "200px"]}
            justifyItems="center"
            paddingBottom={["2rem", "4rem"]}
          >
            <LevelPrev href="/levels/#">الجامعي</LevelPrev>
            <LevelPrev href="/levels/secondary">الثانوي</LevelPrev>
            <LevelPrev href="/levels/middle">المتوسط</LevelPrev>
            <LevelPrev href="/levels/primary">الابتدائي</LevelPrev>
          </SimpleGrid>
        </Box>
      </VStack>
      <Center flexGrow={1} flexBasis="auto" flexShrink={1}>
        <Button
          colorScheme="teal"
          variant="outline"
          borderRadius="3px"
          rightIcon={<FiChevronRight />}
        >
          ساهم معنا في إثراء الموقع{" "}
        </Button>
      </Center>
    </main>
  );
}
