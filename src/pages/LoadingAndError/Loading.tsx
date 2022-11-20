import { Grid, Spinner, Text } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Grid placeItems="center" height="100vh">
      <Spinner size="xl" />
    </Grid>
  );
};
