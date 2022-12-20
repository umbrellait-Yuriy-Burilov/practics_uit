import {FC} from "react";
import {useGetFilms} from "../../hooks/api/films.api.hooks";
import {Loading} from '../_UI/Loading/Loading';
import {ShowError} from '../_UI/ShowError/ShowError';
import {Update} from '../_UI/Update/Update';

export const Films: FC = () => {
  const {data, isLoading, isError, isFetching, error} = useGetFilms();

  const films = data?.results;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      {films &&
        films.map((film) => <div key={film.episode_id}>{film.title}</div>)}
    </div>
  );
};