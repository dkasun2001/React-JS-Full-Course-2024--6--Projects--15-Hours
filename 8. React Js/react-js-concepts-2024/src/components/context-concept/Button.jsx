import { useContext } from "react";
import { globalContext } from "../../context/GlobalState";

const Button = () => {
  const { setTheme,theme } = useContext(globalContext);

  return (<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>);
};

export default Button;
