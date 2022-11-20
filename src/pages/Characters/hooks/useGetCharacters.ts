import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const useGetCharacters = () => {
  const [URL, setURL] = useState("https://rickandmortyapi.com/api/character");

  const { data, isError, isLoading } = useQuery(
    ["characters", URL],
    async () => {
      const response = await fetch(URL);
      return response.json();
    }
  );

  const onChangePage = (isNextPage: boolean) => {
    if (isNextPage && data?.info?.next) {
      setURL(data?.info?.next);
    } else if (!isNextPage && data?.info?.prev) setURL(data?.info?.prev);
  };

  return {
    data,
    isError,
    isLoading,
    onChangePage,
  };
};
