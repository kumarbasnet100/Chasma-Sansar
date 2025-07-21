import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart, Star, Check, Minus, Plus } from "lucide-react";
import { DataContext } from "../context/DataContext";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const colorOptions = [
    { name: "green", class: "bg-green-500" },
    { name: "red", class: "bg-red-400" },
    { name: "pink", class: "bg-pink-300" },
    { name: "blue", class: "bg-blue-500" },
  ];

  const sizeOptions = ["S", "M", "L", "XL"];

  // Find the product
  const product = products.find((p) => p.id === parseInt(id));

  // Reset state if product changes
  useEffect(() => {
    if (product) {
      setSelectedColor(colorOptions[0].name);
      setSelectedSize(sizeOptions[0]);
      setQuantity(1);
    }
  }, [product]);

  // Handle quantity changes
  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => Math.min(prev + 1, 10)); // Max 10 items
    } else {
      setQuantity((prev) => Math.max(prev - 1, 1)); // Min 1 item
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select color and size");
      return;
    }

    const productToAdd = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };

    addToCart(productToAdd);
  };

  // Handle Wishlist Toggle
  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Render loading or not found state
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className=" min-h-screen">
      {/* Hero Banner */}
      <section className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src="/page-main-image.jpg"
          className="object-cover w-full h-96"
          alt="Autumn scene"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Product Details</h1>
          <p className="mt-4 font-medium">Home / {product.name}</p>
        </div>
      </section>

      {/* Product Details Container */}
      <div className="max-w-7xl mx-auto px-4 py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain rounded-xl shadow-sm"
            />
            {/* Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
            >
              <Heart />
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title and Category */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="text-gray-600 mt-2 flex items-center">
                <Star className="text-yellow-500 mr-2" />
                {product.rating} | {product.category}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gradient">
                NPR {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  NPR {product.originalPrice}
                </span>
              )}
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium mb-2">Select Color</h3>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full ${
                      color.class
                    } transition-all duration-200 hover:scale-110 ${
                      selectedColor === color.name
                        ? "ring-4 ring-offset-2 ring-brand-400 shadow-glow"
                        : "hover:ring-2 hover:ring-offset-1 hover:ring-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium mb-2">Select Size</h3>
              <div className="flex gap-3">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-xl transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-gradient-primary text-white border-transparent shadow-glow"
                        : "bg-white text-gray-700 border-gray-200 hover:border-brand-300 hover:bg-brand-50"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium">Quantity</span>
              <div className="flex items-center border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-2 hover:bg-brand-50 rounded-l-xl transition-colors duration-200"
                >
                  <Minus size={20} />
                </button>
                <span className="px-4 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="p-2 hover:bg-brand-50 rounded-r-xl transition-colors duration-200"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center btn-gradient text-white py-3 px-6 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <ShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>

            {/* Product Information Tabs */}
            <div>
              <div className="flex border-b mb-4">
                {["description", "features", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 capitalize font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? "border-b-2 border-brand-500 text-brand-600 bg-brand-50"
                        : "text-gray-500 hover:text-brand-500 hover:bg-brand-25"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div>
                {activeTab === "description" && (
                  <p className="text-gray-600">{product.description}</p>
                )}
                {activeTab === "features" && (
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Check className="text-green-500 mr-2" /> High-quality
                      material
                    </li>
                    <li className="flex items-center">
                      <Check className="text-green-500 mr-2" /> Comfortable fit
                    </li>
                    <li className="flex items-center">
                      <Check className="text-green-500 mr-2" /> Stylish design
                    </li>
                  </ul>
                )}
                {activeTab === "reviews" && (
                  <div>
                    <p className="text-gray-600">No reviews yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
