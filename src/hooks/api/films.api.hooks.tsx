import { useQuery } from "react-query";
import { API_FILMS_URL } from "./config.api";
import axios from "axios";
import { queryClient } from "../../config/QueryProvider";

export type FilmType = {
  title: string;
  opening_crawl: string;
  url: string;
  created: string;
  director: string;
  episode_id: string;
  planets: [];
  characters: [];
  producer: string;
  release_date: string;
};
export type FilmsType = FilmType[];

type FilmsResponseType = {
  count: number;
  results: FilmsType;
};

export const useGetFilms = (query?: string) => {
  let url = API_FILMS_URL;
  const queryKey = ["films"];

  if (query !== "" && query) {
    queryKey.push(query);
    url += `?search=${query}`;
  }

  return useQuery(
    queryKey,
    () => axios.get<FilmsResponseType>(url).then((res) => res.data),
    {
      enabled: query !== "",
      onSuccess: (data) => {
        data.results.forEach((film) => {
          queryClient.setQueryData(["film", film.url], film);
        });
      },
    }
  );
};

export const useGetFilm = (filmUrl: string) => {
  return useQuery(
    ["film", filmUrl],
    () => axios.get<FilmType>(filmUrl).then((res) => res.data),
    {
      // onSuccess: (data) => {
      //
      // },
      // onError: (error) => {
      //
      // },
      // onSettled: (data, error) => {
      //
      // }
      // initialData: () => // плохой вариант
      //   queryClient
      //     .getQueryData<FilmsResponseType>("films")
      //     ?.results?.find((film) => film.url === filmUrl),
    }
  );
};
