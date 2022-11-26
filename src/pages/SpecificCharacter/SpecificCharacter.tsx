import { Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import { Error, Loading } from "../../components";
import { CharacterProps } from "../../types/character";

interface ISpecificCharacterProps {
  isLoading: boolean;
  isError: boolean;
  data: CharacterProps;
}

export const SpecificCharacter = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: character,
  }: ISpecificCharacterProps = useFetchData({
    queryKey: "character",
    url: `https://rickandmortyapi.com/api/character/${id}`,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <Flex flexDirection="column" justify="center" p="12px">
      <Flex flexDir="column" align="center">
        <Image src={character.image} width="200px" />
        <Text fontSize="4xl" fontWeight="medium">
          {character.name}
        </Text>
      </Flex>

      <Flex>
        <Text fontWeight="bold">gender: </Text>
        <Text>{character.gender}</Text>
      </Flex>
    </Flex>
  );
};
