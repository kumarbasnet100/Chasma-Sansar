import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Cards = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, selectedColor);
  };

  const [selectedColor, setSelectedColor] = useState("pink");

  const colorOptions = [
    { name: "green", class: "bg-green-500" },
    { name: "red", class: "bg-red-400" },
    { name: "pink", class: "bg-pink-300" },
  ];

  if (!product) {
    return <div className="text-gray-500">Product not available</div>;
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl max-w-xs transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-brand-200 group">
        {/* Product Image */}
        <div className="mb-6 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span
              onClick={handleAddToCart}
              className="text-brand-600 text-lg font-medium border-b-2 border-transparent transition-all duration-200 hover:border-brand-600 hover:text-brand-700 cursor-pointer"
            >
              ADD TO CART
            </span>
            <div className="flex gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  className={`w-6 h-6 rounded-full ${
                    color.class
                  } transition-all duration-200 hover:scale-110 ${
                    selectedColor === color.name
                      ? "ring-2 ring-offset-2 ring-brand-400 shadow-glow"
                      : "hover:ring-2 hover:ring-offset-1 hover:ring-gray-300"
                  }`}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-brand-700 transition-colors duration-200">
                {product.name}
              </h2>
              <p className="text-gray-500">{product.category}</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-gradient">
                NPR {product.price}
              </span>
              <div className="text-gray-400 line-through text-sm">
                NPR {product.originalPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
