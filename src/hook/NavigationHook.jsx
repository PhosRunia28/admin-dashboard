import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";
function NavigationHook() {
  const navigation = useContext(NavigationContext);
  return navigation;
}

export default NavigationHook;
