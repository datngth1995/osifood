/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li className="cate-item">
      <Link to={`${props.href}`}> {props.title} </Link>
    </li>
  );
};
export default MenuItem;
