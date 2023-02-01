"use client";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  const theme = extendTheme({
    fonts: {
      heading: `"Changa", sans-serif`,
      body: `"Changa", sans-serif`,
    },
  });
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
