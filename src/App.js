import React, { useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { getProducts } from "./api/api";
import Navbar from "./components/Navbar";

import "./App.css"

function App() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    console.log(products);

    useEffect(() => {

      setIsLoading(true)
      getProducts()
      .then((data) => {
        const items = data.data
        setProducts(items);
      })
      setIsLoading(false);
    }, [])
    
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Products products={products} isLoading={isLoading}/>} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
