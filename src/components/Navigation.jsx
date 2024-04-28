import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" p={3} bg="gray.200" justifyContent="space-around">
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/experience">
        Experience
      </Link>
      <Link as={RouterLink} to="/contact">
        Contact
      </Link>
    </Flex>
  );
};

export default Navigation;
