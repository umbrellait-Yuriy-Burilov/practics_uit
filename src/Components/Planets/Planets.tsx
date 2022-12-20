import {FC} from 'react';
import {Loading} from '../_UI/Loading/Loading';
import {ShowError} from '../_UI/ShowError/ShowError';
import {Update} from '../_UI/Update/Update';
import {useGetPlanets} from '../../hooks/api/planets.api.hooks';

export const Planets: FC = () => {
  const {data, isLoading, isError, isFetching, error} = useGetPlanets();
  const planets = data?.results;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p>planets</p>
      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      {planets &&
        planets.map((planet) => <div key={planet.url}>{planet.name}</div>)}
    </div>
  );
};