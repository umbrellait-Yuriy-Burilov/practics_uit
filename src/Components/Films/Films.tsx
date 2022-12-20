import { FC, useState } from "react";
import { FilmPage } from "../../Pages/Films/Film.page";
import { useGetFilms } from "../../hooks/api/films.api.hooks";
import { Loading } from "../_UI/Loading/Loading";

export const Films: FC = () => {
  const [filmUrl, setFilmUrl] = useState("");

  const { data, isLoading } = useGetFilms();

  const films = data?.results ?? [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul>
      {filmUrl && (
        <div>
          <button onClick={() => setFilmUrl("")}>back</button>
          <FilmPage filmUrl={filmUrl} />
        </div>
      )}
      {!filmUrl &&
        films.map((film) => (
          <li onClick={() => setFilmUrl(film.url)} key={film.episode_id}>
            <b>Film: </b>{film.title}
          </li>
        ))}
    </ul>
  );
  // return <FilmsPage />;
};