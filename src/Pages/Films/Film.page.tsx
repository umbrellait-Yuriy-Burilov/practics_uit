import {FC} from "react";
import {useGetFilm} from '../../hooks/api/films.api.hooks';
import {Loading} from '../../Components/_UI/Loading/Loading';

export const FilmPage: FC<{filmUrl: string}> = ({filmUrl}) => {
  const {data: film, isLoading} = useGetFilm(filmUrl);

  if (isLoading) {
    return <Loading />
  }

  if (film) {
    return <div>
      <h3>{film.title}</h3>
      <p>{film.opening_crawl}</p>
    </div>
  }
  return null;
};