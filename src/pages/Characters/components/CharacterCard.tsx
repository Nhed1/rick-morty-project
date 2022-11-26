import { Flex, Image, Text } from "@chakra-ui/react";
import { CharacterProps } from "../../../types/character";
import { useNavigation } from "../../../hooks/useNavigation";

export function CharacterCard({ character }: { character: CharacterProps }) {
  const { handleNavigation } = useNavigation(character.id);

  return (
    <Flex
      border="1px black solid"
      w="300px"
      h="200px"
      overflowY="auto"
      alignItems="center"
      justifyItems="center"
      flexDirection="column"
      cursor="pointer"
      onClick={handleNavigation}
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
