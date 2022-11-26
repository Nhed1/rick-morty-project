import { Flex, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex>
      <Link color="blue.500" fontWeight="bold" as={ReactLink} to="/characters">
        CHARACTERS
      </Link>
    </Flex>
  );
};
