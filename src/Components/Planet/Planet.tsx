import { FC } from "react";
import { useGetPlanet } from "../../hooks/api/planets.api.hooks";
import { Loading } from "../_UI/Loading/Loading";
import { Update } from "../_UI/Update/Update";
import { ShowError } from "../_UI/ShowError/ShowError";

export const Planet: FC<{ planetUrl: string }> = ({ planetUrl }) => {
  const { data, isLoading, isError, error, isFetching } =
    useGetPlanet(planetUrl);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Update isUpdate={isFetching} />
      <ShowError isError={isError} error={error} />
      {data && <div>Planet: {data.name}</div>}
    </div>
  );
};