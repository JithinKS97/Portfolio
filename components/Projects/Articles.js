import React from "react";
import { Heading, Text, Box, HStack, Link } from "@chakra-ui/react";

export default function Articles() {
  return (
    <>
      <Box pb="150">
        <Heading mt="10" fontSize="50px">
          My writings
        </Heading>
        <HStack mt="5">
          <Link target="_blank" href="https://dev.to/jithinks97">
            <Text fontSize="20">Dev.to articles</Text>
          </Link>
          <Link target="_blank" href="https://medium.com/@jithunni.ks">
            <Text fontSize="20">Medium articles</Text>
          </Link>
        </HStack>
      </Box>
    </>
  );
}
