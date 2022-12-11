/* eslint-disable react/prop-types */
const MenuItem = (props) => {
  return (
    <li className="cate-item">
      <a href={props.href} title={props.title}>
        {' '}
        {props.title}{' '}
      </a>
    </li>
  );
};
export default MenuItem;
