import { FC } from "react";
import {getIdFromFilmUrl, useGetFilms} from '../../hooks/api/films.api.hooks';
import { Loading } from "../_UI/Loading/Loading";
import {Link} from 'react-router-dom';

export const Films: FC = () => {
  const { data, isLoading } = useGetFilms();

  const films = data?.results ?? [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul>
      {films.map((film) => (
        <li key={film.episode_id}>
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