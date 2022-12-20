import {useQuery} from 'react-query';
import {API_FILMS_URL} from './config.api';
import axios from 'axios';

type FilmType = {
  title: string,
  url: string,
  created: string,
  director: string,
  episode_id: string,
  planets: [],
  characters: [],
  producer: string,
  release_date: string,
};
type FilmsType = FilmType[];
type FilmsResponseType = {
  count: number,
  results: FilmsType
}

export const useGetFilms = () => useQuery(
  ['films'],
  () => axios.get<FilmsResponseType>(API_FILMS_URL).then(res => res.data),
  {}
)