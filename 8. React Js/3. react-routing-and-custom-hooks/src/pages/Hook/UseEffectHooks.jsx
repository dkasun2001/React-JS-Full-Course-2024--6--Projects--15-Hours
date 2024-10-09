import { useEffect, useRef } from "react";

const UseEffectHook = () => {
  const countValue = useRef(0);
  const divElementRef = useRef();
  const inputRef = useRef();

  const handleClick = () => {
    countValue.current++;
    console.log(countValue.current);
  };

  useEffect(() => {
    const getDivReference = divElementRef.current;
    inputRef.current.focus();

    getDivReference.style.color = "red";

    setTimeout(() => {
      getDivReference.style.color = "blue";
    }, 2000);

    setTimeout(() => {
      getDivReference.style.color = "green";
    }, 1000);

    console.log(getDivReference);
  }, []);

  return (
    <div>
      <h1>useRef, useCallback, and useMemo hook</h1>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divElementRef}>Some random test</div>
      <input name="name" placeholder="enter name" ref={inputRef} />
    </div>
  );
};

export default UseEffectHook;
