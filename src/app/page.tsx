"use client";

import { Box } from "@chakra-ui/react";
import { Signin } from "./signin/page";

export default function Home() {
  return (
    <Box bg="#141414" w="100%" h="100vh" p={4} color="white">
      <Signin />
    </Box>
  );
}
