import {FC} from 'react';
import {Link} from 'react-router-dom';

export const IndexPage: FC = () => {
  return (
    <ul>
      <li><Link to={'/films'} >Films</Link></li>
    </ul>
  )
}