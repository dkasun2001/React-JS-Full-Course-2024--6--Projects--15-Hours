import { useState } from "react";
import "./App.css";
import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponents from "./components/functional-components";
import ProductList from "./components/products/ProductList";
import Users from "./components/users/Users";
import Button from "./components/context-concept/Button";
import Text from "./components/context-concept/Text";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React Js Concepts 2024</h2>
      
     {/*  <ClassBasedComponent />
      <FunctionalComponents /> */}

      {/* <ProductList listOfProduct={dummyProductData} name="Kasun" city="Kandy" /> */}

      {/* <Users/> */}

      <Button/>
      <Text/>
    </div>
  );
}

export default App;
