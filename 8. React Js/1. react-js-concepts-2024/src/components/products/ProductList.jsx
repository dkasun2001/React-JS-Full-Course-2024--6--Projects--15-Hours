import { useEffect, useState } from "react";
import ProductItem from "./components/productItem";
import "./style.css";

const ProductList = ({ name, city, listOfProduct }) => {
  //---------------------------------------- useState hook

  const initialState = true;
  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  //---------------------------------------- useEffect hook

  useEffect(() => {
    setFlag(!flag);
    console.log("useEffect");
  }, []); // this will only run on page load once

  useEffect(() => {
    console.log("count changes");
    count === 10 ? setChangeStyle(true) : null;

    return()=>{
      console.log("component is unmount")
    }
  }, [count]);


  //---------------------------------------- conditional statements

  /* const renderTextBlock = (getFlag) => {
    return getFlag ? <p>Flag is true</p> : <p>Flag is false</p>;
  }; */

  // const renderTextBlock = flag ? <p>Flag is true</p> : <p>Flag is false</p>;

  /*  let renderTextBlock = null;
  if (flag) {
    renderTextBlock = <p>Flag is true</p>;
  } else {
    renderTextBlock = <p>Flag is false</p>;
  } */

  //----------------------------------------

  const handleToggleText = () => {
    setFlag(!flag);
  };

  const handleIncreseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3 className="title">Ecommerce Project</h3>
      {/* <ProductItem/> */}

      {/* ---------------------------------------- */}

      <button onClick={handleToggleText}>Toggle Text</button>
      {flag ? (
        <h4>
          {name} and {city}
        </h4>
      ) : (
        <h4>Hellow</h4>
      )}

      {/* ---------------------------------------- */}

      <div>
        <p>Count id {count}</p>
        <button style={{backgroundColor: changeStyle?"red":null}} onClick={handleIncreseCount}>Count +</button>
      </div>

      {/* ---------------------------------------- */}

      {flag ? <p>Flag is true</p> : <p>Flag is false</p>}
      {/* {renderTextBlock(flag)} */}
      {/* {renderTextBlock} */}

      <h4>
        Name is {name}, City is {city}
      </h4>

      {/* ---------------------------------------- */}

      <ul>
        {listOfProduct.map((item, index) => (
          <ProductItem singleProductItem={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
