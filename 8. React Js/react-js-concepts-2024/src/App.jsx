import { useState } from 'react'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponents from './components/functional-components'
import ProductList from './components/products/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>React Js Concepts 2024</h1>
    {/* <ClassBasedComponent/>
    <FunctionalComponents/> */}
    <ProductList/>
   </div>
  )
}

export default App
