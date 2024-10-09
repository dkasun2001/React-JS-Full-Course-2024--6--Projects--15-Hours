import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";

const UseMemoHook = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);

  const filterProductByPrice = (getProducts) => {
    console.log("this function is getting rendered");
    return getProducts?.length > 0
      ? getProducts.filter((singleProductItem) => singleProductItem.price > 10)
      : [];
  };

  const memorizedVersion = useMemo(
    () => filterProductByPrice(data?.products),
    [data?.products]
  );

  if (loading) return <h1>Loading Data Please Wait....</h1>;
  console.log(data);
  return (
    <div>
      <h1 style={{ color: flag ? "red" : "black" }}>Use Memo</h1>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      <ul>
        {/* {filterProductByPrice(data?.products).map((item) => (
          <li style={{ listStyle: "none" }} key={item.id}>
            {item.title}
          </li>
        ))} */}
        {memorizedVersion.map((item) => (
          <li style={{ listStyle: "none" }} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoHook;
