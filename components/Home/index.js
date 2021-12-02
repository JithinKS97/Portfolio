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
} from "@chakra-ui/react";

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
                <Box fontWeight="bold" as="span" color="#FFD118">
                  BUIDL...
                </Box>
              </Text>
              <Text color="white" mt="10" fontSize="20px">
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
                  See resume
                </Link>
                <HStack mt="5">
                  <Box fontSize="20px" fontWeight="bold" color="#FFD118">
                    Find me at
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
  .logo {
    width:70px;
    cursor: pointer;
  }
  .logo-twitter {
    width:40px;
    cursor: pointer;
    margin-left:20px;
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
