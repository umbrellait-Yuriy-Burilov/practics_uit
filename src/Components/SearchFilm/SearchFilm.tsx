import {FC} from 'react';
import {useGetFilms} from '../../hooks/api/films.api.hooks';
import {Loading} from '../_UI/Loading/Loading';
import {Update} from '../_UI/Update/Update';
import {ShowError} from '../_UI/ShowError/ShowError';
import {FilmList} from '../FilmList/FilmList';

export const SearchFilm: FC<{ search: string }> = ({ search }) => {
  const { data, error, isError, isLoading, isFetching } = useGetFilms(search);

  const films = data?.results ?? [];

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      <FilmList films={films} />
    </div>
  );
};