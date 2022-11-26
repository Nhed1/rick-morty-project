import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const SpecificCharacter = () => {
  const { id } = useParams();

  return <Flex>Character</Flex>;
};
