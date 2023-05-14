/* eslint-disable react/prop-types */
import classname from "classnames";
import NavigationHook from "../hook/NavigationHook";
function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = NavigationHook();
  function handlerClick(e) {
    e.preventDefault();
    navigate(to);
  }
  const classes = classname(
    "py-2 text-black text-decoration-none",
    className,
    currentPath === to && activeClassName
  );
  return (
    <a href={to} className={classes} onClick={handlerClick}>
      {children}
    </a>
  );
}

export default Link;
