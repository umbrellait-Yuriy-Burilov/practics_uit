import {useQuery} from 'react-query';
import {API_PLANETS_URL} from './config.api';
import axios from 'axios';

type PlanetType = {
  climate: string,
  created: string,
  diameter: string,
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string
};

type PlanetsType = PlanetType[];

type PlanetsResponseType = {
  count: number,
  results: PlanetsType
}

export const useGetPlanets = () => useQuery(
  ['planets'],
  () => axios.get<PlanetsResponseType>(API_PLANETS_URL).then(res => res.data),
  {}
)