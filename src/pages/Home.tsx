import { Grid, Text } from "@chakra-ui/react";

export function Home() {
  return (
    <Grid placeItems="center" width="100%" height="calc(100vh - 50px)">
      <Text fontSize="5xl" fontWeight="300" color="blue.500" display="flex">
        Welcome to the{" "}
        <Text ml={3} color="orange.500">
          Rick and Morty Project
        </Text>
      </Text>
    </Grid>
  );
}
