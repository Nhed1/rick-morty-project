import { Button, Flex } from "@chakra-ui/react";

interface IPaginationProps {
  setURL: (arg: string) => void;
  next?: string;
  prev?: string;
}

export const Pagination = ({ setURL, next, prev }: IPaginationProps) => {
  const handlePageChange = (pageURL?: string) => {
    if (pageURL) setURL(pageURL);
  };

  return (
    <Flex justifyContent="end" mr={8}>
      <Button onClick={() => handlePageChange(prev)}>Previous page</Button>
      <Button onClick={() => handlePageChange(next)}>Next page</Button>
    </Flex>
  );
};
