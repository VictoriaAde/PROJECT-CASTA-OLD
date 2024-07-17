"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

export const Signin = () => {
  return (
    <Container bg="#141414" h={"80%"} maxW="600px">
      <Flex
        flexDirection="column"
        align={"center"}
        justify={"space-between"}
        p={"2rem"}
      >
        <Box>
          <Text fontSize="6xl" fontWeight={"700"}>
            CASTA
          </Text>
        </Box>
        <Box>
          <Button
            size="md"
            height="48px"
            width="300px"
            borderRadius="50px"
            borderColor="green.500"
            bg="#3384F7"
          >
            Connect Warpcast{" "}
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};
