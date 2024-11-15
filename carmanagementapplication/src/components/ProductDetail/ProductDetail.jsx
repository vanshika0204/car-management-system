import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backend_url } from "../../App";

export const ProductDetail = () => {
  const { id } = useParams();  // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${backend_url}/product/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Product not found');
      }
      return res.json();
    })
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img
        src={`${backend_url}${product.image}`}
        alt={product.name}
        className="product-detail-image"
      />
      <p>{product.car_type}</p>
      <p>{product.company}</p>
      <p>{product.dealer}</p>
      <p>{product.description}</p>
    </div>
  );
};
