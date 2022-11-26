import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface IUseFetchDataProps {
  url: string;
  queryKey: string;
}

export const useFetchData = ({ url, queryKey }: IUseFetchDataProps) => {
  const [URL, setURL] = useState(url);

  const { data, isError, isLoading } = useQuery([queryKey, URL], async () => {
    const response = await fetch(URL);
    return response.json();
  });

  return {
    data,
    isError,
    isLoading,
    setURL,
  };
};
