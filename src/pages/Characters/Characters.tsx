import { Grid } from "@chakra-ui/react";

import { CharacterProps } from "../../types/character";
import { CharacterCard } from "./components/CharacterCard";
import { Error, Loading } from "../../components";
import { Pagination } from "./components/Pagination";
import { useFetchData } from "../../hooks/useFetchData";

export function Characters() {
  const { isLoading, isError, data, setURL } = useFetchData({
    queryKey: "characters",
    url: "https://rickandmortyapi.com/api/character",
  });

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
        {characters.map((character: CharacterProps) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </Grid>

      <Pagination next={info.next} prev={info.prev} setURL={setURL} />
    </>
  );
}
