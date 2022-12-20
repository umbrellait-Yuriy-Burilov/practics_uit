import React, { FC } from "react";
import { FilmsType } from "../../hooks/api/films.api.hooks";
import {FilmListItem} from './FilmListItem';

export const FilmList: FC<{ films: FilmsType }> = ({ films }) => {
  return (
    <div>
      {films.map((film) => (
        <FilmListItem key={film.episode_id} film={film} />
      ))}
    </div>
  );
};