/* eslint-disable react/no-unescaped-entities */
import { Box, Heading } from "@chakra-ui/react";
import Projects from "./Projects";
import { useState } from "react";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      filter={`${isModalOpen ? "blur(10px)" : null}`}
      p="50"
      pt="10"
      bg="white"
      h="100vh"
      transition="filter 0.1s"
    >
      <Heading mb="0" fontSize="50px">
        Projects
      </Heading>
      <Box mt="5" fontSize="20px">
        I primarily use React and Node in my projects.
        <br />
        Here are some of the projects that I've built / been a part of...
      </Box>
      <Projects setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </Box>
  );
}
