import { Box, Text, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export function Home() {
  return (
    <Box>
      <Text fontSize="x-large">Welcome to Rick and Morty Project</Text>
      <Link color="blue.500" fontWeight="bold" as={ReactLink} to="/characters">
        CHARACTERS
      </Link>
    </Box>
  );
}
