import { FC } from "react";
import {BrowserRouter} from 'react-router-dom';
import {Router} from '../router/Router';
export const RouterProvider: FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
