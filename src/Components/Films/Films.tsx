import { FC, useState } from "react";
import { useGetFilms } from "../../hooks/api/films.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { ShowError } from "../_UI/ShowError/ShowError";
import { Update } from "../_UI/Update/Update";
import { FilmList } from "../FilmList/FilmList";
import { SearchFilm } from "../SearchFilm/SearchFilm";

export const Films: FC = () => {
  const { data, isLoading, isError, isFetching, error } = useGetFilms();
  const [searchFilm, setSearchFilm] = useState("");

  const films = data?.results ?? [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p>
        Search film:{" "}
        <input
          type="text"
          value={searchFilm}
          onChange={(e) => setSearchFilm(e.target.value)}
        />
      </p>

      <SearchFilm search={searchFilm} />

      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      <FilmList films={films} />
    </div>
  );
};