import { FC, useEffect, useState } from "react";
import { FilmPage } from "../Pages/Films/Film.page";
import { queryClient } from "../config/QueryProvider";
import { apiGetFilm } from "../hooks/api/films.api.hooks";
import { useParams } from "react-router-dom";

export const FilmPageWrapper: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const { filmId } = useParams();

  useEffect(() => {
    queryClient?.prefetchQuery(["film", filmId], () => apiGetFilm(filmId as string));
  }, [filmId]);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        aliquam amet animi corporis doloribus, eligendi ex exercitationem
        facilis id ipsam natus necessitatibus optio, placeat quas suscipit
        totam, velit voluptatibus! Culpa!
      </p>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button>
      {isShow ? <FilmPage /> : null}
    </>
  );
};