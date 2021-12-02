/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import {
  Box,
  Center,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import projects from "./projectsData";

export default function Projects(props) {
  const { setIsModalOpen, isModalOpen } = props;
  const [content, setContent] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const setModalContent = (contents) => {
    setContent(contents);
  };

  return (
    <>
      <style>{style}</style>
      <Modal isCentered onClose={closeModal} size="xl" isOpen={isModalOpen}>
        <ModalContent border="1px solid #e8e8e8">
          <ModalHeader>
            <Heading>{content?.title}</Heading>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pb="10">
            <Box>{content?.description}</Box>
            <Box mt="5">Technologies used: {content.technologies}</Box>
            <Box mt="5">
              <Link rel="noreferrer" target="_blank" href={content?.appLink}>
                See the app
              </Link>
              <br />
              <Link
                rel="noreferrer"
                target="_blank"
                href={content?.articleLink}
              >
                Read about the app
              </Link>
              <br />
              <Link rel="noreferrer" target="_blank" href={content?.github}>
                See the code
              </Link>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box pt="50">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {projects.map((project) => (
            <Project
              openModal={openModal}
              project={project}
              key={project.img}
              setModalContent={setModalContent}
              closeModal={closeModal}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}

function Project(props) {
  const {
    project: { img, bg },
    project,
    openModal,
    setModalContent,
  } = props;

  const handleClick = () => {
    setModalContent(project);
    openModal();
  };

  return (
    <Box
      cursor="pointer"
      w="250px"
      h="250px"
      boxShadow="md"
      p="6"
      rounded="md"
      className="box"
      border="1px solid #e8e8e8"
      bg={bg || "white"}
      onClick={handleClick}
    >
      <Center>
        <img src={img} className="img"></img>
      </Center>
    </Box>
  );
}

const style = `
    .img {
        width: 200px;
        height: 200px; 
    }
    .box {
        transition: transform 0.1s;
    }
    .box:hover {
        transform: scale(1.05);
    }
`;
