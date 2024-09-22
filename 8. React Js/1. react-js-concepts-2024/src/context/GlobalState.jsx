import { createContext, useState } from "react";

// create the context
export const globalContext = createContext(null);

// create global state that receipe component as a children
function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");

  const handleChangeThemeOnButtonClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <globalContext.Provider value={{ theme, setTheme }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalState;
