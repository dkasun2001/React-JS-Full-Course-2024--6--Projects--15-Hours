import { useReducer } from "react";

const initialState = {
  showTextFlag: false,
  changeTextStylesFlag: false,
};

const reducer = (state, action) => {
  
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>useReducer Hook Examples</h3>
      <button>Hide Text</button>
      <button>Show Text</button>
      <button>Change Text Styles</button>
    </div>
  );
};

export default UseReducerExample;
