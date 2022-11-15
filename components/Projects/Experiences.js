import { Text, Heading, List, ListItem, Box } from "@chakra-ui/react";

const experinces = [
  {
    title: "Full stack web 3 developer at Nethermind",
    timeLine: "September 2022 to Present",
    works: [
      `* Contributing to Ethernaut.`,
      `* Ethernaut is an interactive online game that teaches solidity security topics in a hands on way.`,
      `* Works with the Open zeppelin team to maintain the project and develop new features.`,
      `* Works on the React as well as the smart contract side.`
    ],
  },
  {
    title: "Full stack web 3 developer at Timespace ventures",
    timeLine: "January 2022 to September 2022",
    works: [
      `* Worked on architecting and developing the back end of NFT console.`,
      `* NFT console is an analytics dashboard for NFT creators.`,
      `* NFT creators can get various statistics related to the NFTs that they created in a single place.`,
      `* Technologies used - Node, Express, Mongo, Ethers, Dune analytics, Fast API.`,
    ],
  },
  {
    title: "Full stack developer at Baton systems",
    timeLine: "June 2019 to August 2021",
    works: [
      `* Worked on developing user interface of one of the products of Baton
          sytems from the ground up using React and Next.`,
      `* Worked on RPA in Node.js that automated multiple business work flows.`,
    ],
  },
  {
    title: "Google Summer of code fellow for Processing foundation",
    timeLine: "June 2018 to August 2018",
    works: [
      `* Designed and developed Dynamic learning, a webapp that teachers can use to teach STEM subjects with the use of interactive visualisations.`,
    ],
  },
];

const Experiences = () => {
  return (
    <>
      <Box>
        <Heading mt="10" mb="0" fontSize="50px">
          Experience
        </Heading>
        {experinces.map((experience) => (
          <Experience experience={experience} key={experience.title} />
        ))}
      </Box>
    </>
  );
};

export default Experiences;

function Experience({ experience: { title, timeLine, works } }) {
  return (
    <>
      <Text fontWeight="bold" fontSize="20" mt="5">
        {title}
      </Text>
      <Text color="grey" fontSize="15" mt="2">
        {timeLine}
      </Text>
      <List fontSize="17">
        {works.map((work) => (
          <ListItem mt="2" key={work}>
            {work}
          </ListItem>
        ))}
      </List>
    </>
  );
}
