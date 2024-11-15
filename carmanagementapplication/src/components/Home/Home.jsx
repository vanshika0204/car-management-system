import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductCreation } from "../ProductCreation/ProductCreation";
import { ProductList } from "../ProductList/ProductList";
import { Sidebar } from "../Sidebar/Sidebar";
import './Home.css'

const Home = () => {

  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/add-product" element={<ProductCreation />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default Home;
