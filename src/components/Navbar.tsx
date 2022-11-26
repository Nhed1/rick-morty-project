import { Flex, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex
      justify="space-around"
      align="center"
      height="50px"
      background="blue.400"
      color="whiteAlpha.900"
      fontSize="2xl"
      fontWeight="bold"
    >
      <Link as={ReactLink} to="/">
        Home
      </Link>
      <Link as={ReactLink} to="/characters">
        Characters
      </Link>
    </Flex>
  );
};
