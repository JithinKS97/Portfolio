/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { Box, Text, Flex, Center, ScaleFade } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <style>{style}</style>
      <Flex bg="#072957" flexDirection="row">
        <Center flex="1" p="100" pt="20" w="100vw" h="100vh">
          <ScaleFade initialScale={0.9} in={true}>
            <Box>
              <Text mb="0" fontSize="40px" color="#FFD118">
                Hey!
              </Text>
              <Text
                mb="0"
                mt="0"
                fontWeight="bold"
                fontSize="50px"
                color="white"
              >
                My name is Jithin. Thanks for visiting my portfolio!
              </Text>
              <Text color="white" mt="10" fontSize="20px">
                I'm a full stack developer who loves to{" "}
                <Box as="span" color="#FFD118">
                  BUIDL...
                </Box>
              </Text>
              <Text color="white" mt="10" fontSize="20px">
                Lately I have been exploring the space of web 3.0 and crypto a
                lot...
              </Text>
              <Text color="white" mt="10" fontSize="20px"></Text>
            </Box>
          </ScaleFade>
        </Center>
        <Flex justifyContent="center" flexDirection="column" flex="1">
          <ScaleFade initialScale={0.9} in={true}>
            <img className="image" src="image.jpeg"></img>
          </ScaleFade>
        </Flex>
      </Flex>
    </>
  );
}

const style = `
  .image {
    width: 300px;
    border-radius: 100%;
  }
`;
