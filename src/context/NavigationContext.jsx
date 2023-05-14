/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
const NavigationContext = createContext();
function Provider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handle = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handle);
    return () => {
      window.removeEventListener("popstate", handle);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { Provider };
export default NavigationContext;
