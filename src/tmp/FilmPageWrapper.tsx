import {FC, useState} from 'react';
import {useParams} from 'react-router-dom';
import {queryClient} from '../config/QueryProvider';
import {FilmPage} from '../Pages/Films/Film.page';

export const FilmPageWrapper: FC = () => {
  const { filmId } = useParams();
  const [isShow, setIsShow] = useState(true);

  const onUpdate = () => {
    queryClient?.invalidateQueries(
      ['film', filmId as string],
      {
        refetchInactive: true
      }
    )
  }

  const onStale = () => {
    queryClient?.invalidateQueries(['film', filmId as string], {
      refetchActive: false
    })
  }

  return (<>
    <button onClick={() => setIsShow(!isShow)}>{isShow ? 'hide': 'show'}</button>
    <button onClick={() => onStale()}>Stale</button>
    <button onClick={() => onUpdate()}>update in inactive</button>
    {isShow ? <FilmPage /> : null}
  </>)
}