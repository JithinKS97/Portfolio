/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Flex,
  Center,
  ScaleFade,
  Link,
  HStack,
  Slide,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <style>{style}</style>
      <Flex position="relative" bg="#072957" flexDirection="row">
        <ScaleFade direction="top" in={true} initialScale={0.1}>
          <Box
            zIndex={1}
            w="60vw"
            h="60vw"
            position="absolute"
            transform="translate(-50%, -50%)"
            top="0"
            left="0"
            bg="#031b3b"
            borderRadius="100%"
          ></Box>
        </ScaleFade>
        <Center zIndex={2} flex="1" p="100" pt="20" w="100vw" h="100vh">
          <ScaleFade initialScale={0.9} in={true}>
            <Box>
              <Text mb="0" fontSize="40px" color="#FFD118">
                Hey!
              </Text>
              <Text fontWeight="bold" fontSize="50px" color="white">
                I'm Jithin
              </Text>
              <Text fontWeight="bold" fontSize="30px" color="white">
                Thanks for visiting my portfolio!
              </Text>
              <Text color="white" mt="10" fontSize="20px">
                I'm a full stack developer who loves to{" "}
                <Box fontWeight="bold" as="span" color="#FFD118">
                  BUIDL...
                </Box>
              </Text>
              <Text color="white" fontSize="20px">
                Lately I have been exploring the space of web 3.0 and crypto a
                lot...
              </Text>
              <Box mt="10">
                <Link
                  target="_blank"
                  fontSize="20px"
                  fontWeight="bold"
                  color="#f15bb5"
                  href="https://rxresu.me/r/wv3nlu"
                >
                  See my resume
                </Link>
                <HStack>
                  <Box fontSize="20px" fontWeight="bold" color="#92c2ff">
                    Connect with me @
                  </Box>
                  <Link target="_blank" href="https://github.com/JithinKS97">
                    <img className="logo" src="octocat.png"></img>
                  </Link>
                  <Link target="_blank" href="https://twitter.com/JithinKS_">
                    <img className="logo-twitter" src="twitter.png"></img>
                  </Link>
                </HStack>
              </Box>
            </Box>
          </ScaleFade>
        </Center>
        <Flex
          zIndex={2}
          justifyContent="center"
          flexDirection="column"
          flex="1"
        >
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
    border-radius: 30%;
    border: 5px solid #43B0F1;
  }
  .logo {
    width:70px;
    cursor: pointer;
  }
  .logo-twitter {
    width:40px;
    cursor: pointer;
    margin-top:15px;
  }
  .logo:hover {
    filter: brightness(150%);
    -webkit-filter: brightness(150%);
    -moz-filter: brightness(150%);
    -o-filter: brightness(150%);
    -ms-filter: brightness(150%);
    -webkit-transition: all 0.50s;
    transition: all 0.10s;
  }
  .logo-twitter:hover {
    filter: brightness(150%);
    -webkit-filter: brightness(150%);
    -moz-filter: brightness(150%);
    -o-filter: brightness(150%);
    -ms-filter: brightness(150%);
    -webkit-transition: all 0.50s;
    transition: all 0.10s;
  }
`;
