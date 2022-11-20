import { Button, Flex, Grid, Spinner } from "@chakra-ui/react";

import { CharacterCardProps } from "./types/character";
import { CharacterCard } from "./components/CharacterCard";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { Error, Loading } from "../LoadingAndError";

export function Characters() {
  const { isLoading, isError, data, onChangePage } = useGetCharacters();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const { results: characters } = data;

  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        placeItems="center"
        p="30px"
      >
        {characters.map((character: CharacterCardProps) => (
          <CharacterCard character={character} />
        ))}
      </Grid>
      <Flex justifyContent="end" mr={8}>
        <Button onClick={() => onChangePage(false)}>Previous page</Button>
        <Button onClick={() => onChangePage(true)}>Next page</Button>
      </Flex>
    </>
  );
}
