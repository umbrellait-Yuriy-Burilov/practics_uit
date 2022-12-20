import {FC} from 'react';
import {useGetFilms} from '../../hooks/api/films.api.hooks';
import {Loading} from '../../Components/_UI/Loading/Loading';
import {Update} from '../../Components/_UI/Update/Update';
import {ShowError} from '../../Components/_UI/ShowError/ShowError';
import {FilmList} from '../../Components/FilmList/FilmList';

export const FilmsPage: FC = () => {
  const { data, isLoading, isError, isFetching, error } = useGetFilms();

  const films = data?.results ?? [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      <FilmList films={films} />
    </div>
  );
}