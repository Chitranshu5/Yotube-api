import React, { useState, useEffect } from "react";

// Category Component
const Category = ({ selectedCategory, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  // Fetching the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://fakestoreapi.com/products/categories";
      const response = await fetch(url);
      const result = await response.json();
      setCategories(result);
    };
    fetchData();
  }, []);

  return (
    <aside className="category col-span-12 md:col-span-3 bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Categories</h2>
      <div className="space-y-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-4 rounded-lg hover:text-gray-700 transition cursor-pointer ${
              selectedCategory === cat ? "bg-orange-400 text-white" : ""
            }`}
            onClick={() => onCategorySelect(cat)}
          >
            <p className="text-center font-medium capitalize">{cat}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

// Products Component
const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        selectedCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {products.map((prod) => (
        <div
          key={prod.id}
          className="bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition flex flex-col"
        >
          <div className="flex-grow">
            <img
              src={prod.image}
              alt={prod.title}
              className="w-full h-40 object-contain rounded-t-lg mb-4"
            />
            <p className="font-medium text-lg mb-2">{prod.title}</p>
            <p className="text-gray-500 mb-4">${prod.price}</p>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

// Home Component
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="bg-slate-200">
      <nav className="bg-black py-4 flex justify-center items-center sticky top-0 z-50 shadow-lg">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-orange-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl">
          CTR{" "}
          <span className="bg-orange-500 py-1 px-2 rounded-md text-white shadow-md transition-all duration-300 ease-in-out hover:bg-orange-600">
            Store
          </span>
        </h1>
      </nav>

      <main className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:box-content">
          {/* Sidebar - Categories */}
          <Category
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
          {/* Main Content - Products */}
          <section className="products col-span-12 md:col-span-9 h-screen overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
              Products
            </h2>
            <Products selectedCategory={selectedCategory} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
