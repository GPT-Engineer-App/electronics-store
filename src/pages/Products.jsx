import { Box, Container, Heading, SimpleGrid, Text, Image, VStack } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$999",
    image: "/images/sample-product-1.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High-performance laptop for professionals",
    price: "$1999",
    image: "/images/sample-product-2.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$299",
    image: "/images/sample-product-3.jpg",
  },
];

const Products = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Our Products
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <VStack spacing={4}>
                <Heading as="h2" size="md">
                  {product.name}
                </Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;