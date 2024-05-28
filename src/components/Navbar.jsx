import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          E-Shop
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            Home
          </Link>
          <Link as={NavLink} to="/products" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            Products
          </Link>
          <Link as={NavLink} to="/about" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            About Us
          </Link>
          <Link as={NavLink} to="/contact" px={2} py={1} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;