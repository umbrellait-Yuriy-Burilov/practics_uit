import React, {FC} from 'react';
import {FilmType} from '../../hooks/api/films.api.hooks';

export const FilmListItem: FC<{film: FilmType}> = ({film}) => {
  return <div>{film.title}</div>
}
