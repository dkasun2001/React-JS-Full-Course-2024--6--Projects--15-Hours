import { useCallback, useState } from "react";
import Counter from "./Counter";

const UseCallbackHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memorizeSetCountOneFunc = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );

  const memorizeSetCountTwoFunc = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

  return (
    <div>
      <h1>Use CallbackHook</h1>
      <Counter
        countValue={countOne}
        // onClick={() => setCountOne(countOne + 1)}
        onClick={memorizeSetCountOneFunc}
      />
      <Counter
        countValue={countTwo}
        // onClick={() => setCountTwo(countTwo + 1)}
        onClick={memorizeSetCountTwoFunc}
      />
    </div>
  );
};

export default UseCallbackHook;
