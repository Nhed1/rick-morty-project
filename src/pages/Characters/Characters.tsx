import { Button, Flex, Grid, Spinner } from "@chakra-ui/react";

import { CharacterCardProps } from "./types/character";
import { CharacterCard } from "./components/CharacterCard";
import { useGetCharacters } from "./hooks/useGetCharacters";
import { Error, Loading } from "../LoadingAndError";
import { Pagination } from "./components/Pagination";

export function Characters() {
  const { isLoading, isError, data, setURL } = useGetCharacters();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const { results: characters, info } = data;

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

      <Pagination next={info.next} prev={info.prev} setURL={setURL} />
    </>
  );
}
