import { Text, Heading, List, ListItem, Box } from "@chakra-ui/react";

const experinces = [
  {
    title: "Full stack developer at Baton systems",
    timeLine: "June 2019 to August 2021",
    works: [
      `1. Worked on developing user interface of one of the products of Baton
          sytems from the ground up using React and Next.`,
      `2. Worked on RPA in Node.js that automated multiple business work flows.`,
    ],
  },
  {
    title: "Google Summer of code fellow for Processing foundation",
    timeLine: "June 2018 to August 2018",
    works: [
      `1. Designed and developed Dynamic learning, a webapp that teachers can use to teach STEM subjects with the use of interactive visualisations.`,
    ],
  },
];

const Experiences = () => {
  return (
    <>
      <Box pb="20">
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
