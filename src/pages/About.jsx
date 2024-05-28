import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        About Us
      </Heading>
      <Box>
        <Text fontSize="lg" mb={4}>
          Welcome to E-Shop, your number one source for all things electronics. We're dedicated to giving you the very best of gadgets, with a focus on quality, customer service, and uniqueness.
        </Text>
        <Text fontSize="lg" mb={4}>
          Founded in 2023, E-Shop has come a long way from its beginnings. When we first started out, our passion for providing the best equipment drove us to do tons of research so that E-Shop can offer you the world's most advanced gadgets. We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
        </Text>
        <Text fontSize="lg">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </Text>
      </Box>
    </Container>
  );
};

export default About;