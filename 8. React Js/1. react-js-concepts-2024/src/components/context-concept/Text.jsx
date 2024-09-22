import { useContext } from "react";
import { globalContext } from "../../context/GlobalState";

const Text = () => {
  const { theme } = useContext(globalContext);

  return (
    <h1
      style={{
        fontSize: theme === "light" ? "50px" : "100px",
        backgroundColor: theme === "light" ? "red" : "blue",
        color: theme === "light" ? "blue" : "red",
      }}
    >
      Dinusha Kasun{" "}
    </h1>
  );
};

export default Text;
