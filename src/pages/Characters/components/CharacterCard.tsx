import { Flex, Image, Text } from "@chakra-ui/react";
import { CharacterCardProps } from "../types/character";

export function CharacterCard({
  character,
}: {
  character: CharacterCardProps;
}) {
  return (
    <Flex
      border="1px black solid"
      w="300px"
      h="200px"
      overflowY="auto"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
    >
      <Image src={character.image} alt={character.name} w="140px" />
      <Text fontSize="large">
        {character.id} - {character.name}
      </Text>
      <Text>
        {character.gender} | {character.status}
      </Text>
    </Flex>
  );
}
