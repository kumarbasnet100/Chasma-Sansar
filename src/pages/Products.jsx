import React, { useState, useMemo, useContext } from "react";
import Cards from "../components/Cards";
import { DataContext } from "../context/DataContext";

const Products = () => {
  const { products } = useContext(DataContext);
  const [filters, setFilters] = useState({
    availability: [],
    priceRange: { min: 0, max: 99999 },
  });
  const [sortBy, setSortBy] = useState("best-selling");

  const filteredAndSortedProducts = useMemo(() => {
    if (!products?.length) return [];
    
    let filtered = products.filter(product => {
      if (filters.availability.length > 0) {
        const isInStock = product.stock > 0;
        if (!filters.availability.some(a => 
          (a === 'inStock' && isInStock) || (a === 'outOfStock' && !isInStock)
        )) return false;
      }
      
      const price = parseFloat(product.price);
      const min = parseFloat(filters.priceRange.min) || 0;
      const max = parseFloat(filters.priceRange.max) || 999999;
      return price >= min && price <= max;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return parseFloat(a.price) - parseFloat(b.price);
        case 'price-high': return parseFloat(b.price) - parseFloat(a.price);
        default: return (b.sales || 0) - (a.sales || 0);
      }
    });
  }, [products, filters, sortBy]);

  const handleAvailabilityChange = (value) => {
    setFilters(prev => ({
      ...prev,
      availability: prev.availability.includes(value)
        ? prev.availability.filter(item => item !== value)
        : [...prev.availability, value]
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { ...prev.priceRange, [type]: value }
    }));
  };

  return (
    <div>
      <section>
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden shadow-lg">
          <img src="/page-main-image.jpg" className="object-cover w-full h-96" alt="Autumn scene" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl font-bold">Products</h1>
            <p className="mt-4 font-medium">Home / Products</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex md:flex-row gap-8 flex-col">
          <div className="w-72 flex-shrink-0">
            <div className="border rounded-lg p-4 ">
              <h2 className="text-lg font-semibold mb-4">FILTERS</h2>

              <div className="mb-6">
                <h3 className="font-medium mb-2">AVAILABILITY</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="inStock" className="mr-2" onChange={() => handleAvailabilityChange("inStock")} />
                  <label htmlFor="inStock">In stock</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="outOfStock" className="mr-2" onChange={() => handleAvailabilityChange("outOfStock")} />
                  <label htmlFor="outOfStock">Out of stock</label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">PRICE</h3>
                <div className="flex gap-4">
                  <input type="number" placeholder="Min" className="w-24 border rounded px-2 py-1" value={filters.priceRange.min} onChange={(e) => handlePriceChange("min", e.target.value)} />
                  <input type="number" placeholder="Max" className="w-24 border rounded px-2 py-1" value={filters.priceRange.max} onChange={(e) => handlePriceChange("max", e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm hidden sm:block">
                <span className="text-gray-500">Home / Kids Glasses</span>
                <span className="text-gray-500 ml-4">({filteredAndSortedProducts.length} products)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">Sort by:</span>
                <select className="border rounded px-2 py-1 text-sx" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="best-selling">Best selling</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {!products ? (
                <div className="col-span-full text-center py-10"><p>Loading products...</p></div>
              ) : products.length === 0 ? (
                <div className="col-span-full text-center py-10"><p>No products available.</p></div>
              ) : filteredAndSortedProducts.length === 0 ? (
                <div className="col-span-full text-center py-10"><p>No products match your filters.</p></div>
              ) : (
                filteredAndSortedProducts.map((product) => (
                  <Cards key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
