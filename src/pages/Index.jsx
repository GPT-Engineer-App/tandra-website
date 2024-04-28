import { Box, Flex, Text, Button, Image, VStack, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4} bg="gray.100">
      <Box maxW="xl" p={8} bg="white" boxShadow="xl" rounded="lg">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQzMjA3NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tandra" mb={4} />
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Tandra Debarati Shome
        </Text>
        <Text fontSize="md" color="gray.600" textAlign="center">
          Full Stack Developer | React & Node.js Specialist
        </Text>
        <VStack spacing={3} mt={5}>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            <Link href="https://www.linkedin.com/in/tandra" isExternal>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
            <Link href="https://github.com/tandra" isExternal>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            <Link href="mailto:tandra@example.com" isExternal>
              Email Me
            </Link>
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Index;
