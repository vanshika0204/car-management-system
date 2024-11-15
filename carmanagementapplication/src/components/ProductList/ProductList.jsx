import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./ProductList.css";
import cross_icon from '../assets/cross_icon.png';
import { backend_url } from "../../App";

export const ProductList = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch(`${backend_url}/allproducts`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => setAllProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch(`${backend_url}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });

    fetchInfo();
  };

  return (
    <div className="listproduct">
      <h1>My Cars</h1>
      <div className="listproduct-format-main">
        <p>Car</p> <p>Title</p> <p>Car Type</p> <p>Company</p> <p>Dealer</p> <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e, index) => (
          <div key={e.id}> {/* Use e.id instead of index as key */}
            <div className="listproduct-format-main listproduct-format">
              <Link to={`/product/${e.id}`}>
                <img
                  className="listproduct-product-icon"
                  src={`${backend_url}${e.image}`}  // Fix image URL concatenation
                  alt={e.name}
                />
              </Link>
              <p className="cartitems-product-title">{e.name}</p>
              <p>{e.car_type}</p>
              <p>{e.company}</p>
              <p>{e.dealer}</p>
              <img
                className="listproduct-remove-icon"
                onClick={() => removeProduct(e.id)}
                src={cross_icon}
                alt="Remove Product"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
