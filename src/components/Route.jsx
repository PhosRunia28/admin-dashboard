/* eslint-disable react/prop-types */
import NavigationHook from "../hook/NavigationHook";
function Route({ path, children }) {
  const { currentPath } = NavigationHook();
  if (path === currentPath) {
    return children;
  }
  return null;
}
export default Route;
