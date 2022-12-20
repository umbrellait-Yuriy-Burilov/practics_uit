import {FC, useState} from 'react';
import {FilmPage} from '../Pages/Films/Film.page';

export const FilmPageWrapper: FC = () => {
  const [isShow, setIsShow] = useState(true);

  return (<>
    <button onClick={() => setIsShow(!isShow)}>{isShow ? 'hide': 'show'}</button>
    {isShow ? <FilmPage /> : null}
  </>)
}