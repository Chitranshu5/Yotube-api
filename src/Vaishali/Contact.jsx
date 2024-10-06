import React, { useState, useEffect } from "react";

const Contact = () => {
  // State to store product data
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetching product data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data); // Store the data in state
    };

    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data); // Store categories in state
    };

    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain p-4"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="mt-2 text-gray-600">${product.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
