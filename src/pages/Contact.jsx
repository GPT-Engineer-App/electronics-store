import { Box, Container, Heading, Text, VStack, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Contact Us
      </Heading>
      <Box>
        <VStack spacing={4}>
          <Text fontSize="lg">We'd love to hear from you! Please fill out the form below to get in touch with us.</Text>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Submit</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Contact;