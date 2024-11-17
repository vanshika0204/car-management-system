import { useState } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import { Guest } from './components/Guest/Guest.jsx'
import { ProductList } from './components/ProductList/ProductList.jsx';
import { ProductCreation } from './components/ProductCreation/ProductCreation.jsx'
import { ProductDetail } from './components/ProductDetail/ProductDetail.jsx';
import { Login } from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';

export const backend_url = 'https://car-management-system-zenm.vercel.app/';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Guest />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/add-product",
      element: <ProductCreation />
    },
    {
      path: "/products",
      element: <ProductList />
    },
    {
      path: "/product/:productId",
      element: <ProductDetail />
    }
  ])

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}
// import { Login } from './components/Login/login.jsx';
// import { ProductDetail } from './components/ProductDetail/ProductDetail.jsx';

export default App
