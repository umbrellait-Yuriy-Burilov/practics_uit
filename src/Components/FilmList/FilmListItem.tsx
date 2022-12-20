import React, { FC } from "react";
import { FilmType } from "../../hooks/api/films.api.hooks";
import { Planet } from "../Planet/Planet";

export const FilmListItem: FC<{ film: FilmType }> = ({ film }) => {
  return (
    <div>
      <h5>{film.title}</h5>
      <ul>
        {film.planets.map((planetUrl) => (
          <li key={planetUrl}>
            <Planet planetUrl={planetUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};
