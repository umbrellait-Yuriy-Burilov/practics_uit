import { FC } from "react";
import {apiGetFilm, getIdFromFilmUrl, useGetFilms} from '../../hooks/api/films.api.hooks';
import { Loading } from "../_UI/Loading/Loading";
import {Link} from 'react-router-dom';
import {queryClient} from '../../config/QueryProvider';

export const Films: FC = () => {
  const { data, isLoading } = useGetFilms();

  const films = data?.results ?? [];

  if (isLoading) {
    return <Loading />;
  }

  const prefetchFilm = (filmUrl: string) => {
    const filmId = getIdFromFilmUrl(filmUrl);
    queryClient?.prefetchQuery(
      ['film',filmId],
      () => apiGetFilm(filmId),
      {
        staleTime: 10 * 1000
        // staleTime: Infinity
      }
    )
  }

  return (
    <ul>
      {films.map((film) => (
        <li key={film.episode_id} onMouseEnter={() => prefetchFilm(film.url)}>
          <b>Film: </b>
          <Link to={`film/${getIdFromFilmUrl(film.url)}`} >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
  // return <FilmsPage />;
};