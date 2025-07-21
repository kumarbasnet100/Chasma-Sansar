import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const orderData = {
        customerInfo: formData,
        items: cart,
        totalAmount: getCartTotal(),
        orderDate: new Date(),
        status: 'pending',
        paymentStatus: 'pending'
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Handle successful order
        console.log('Order placed successfully');
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-36">
      <h1 className="text-3xl font-bold mb-8 text-gradient">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 transition-colors duration-200 px-4 py-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="block w-full rounded-xl border border-gray-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 transition-colors duration-200 px-4 py-3"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn-gradient w-full font-semibold text-white text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
            >
              Place Order (NPR {Math.round(getCartTotal())})
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-8 rounded-2xl shadow-lg border border-brand-200">
            <h2 className="text-xl font-semibold mb-6 text-gradient">Order Summary</h2>
            <div className="space-y-4">
            {cart.map((item) => (
            <div key={`${item.id}-${item.selectedColor}`} className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div>
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">
            Color: {item.selectedColor} × {item.quantity}
            </p>
            </div>
            <p className="font-bold text-brand-600">NPR {Math.round(item.price * item.quantity)}</p>
            </div>
            ))}
              <div className="border-t border-brand-200 pt-6 mt-6 bg-white rounded-xl p-4">
                <div className="flex justify-between font-bold text-lg">
                  <p>Total</p>
                  <p className="text-gradient text-xl">NPR {Math.round(getCartTotal())}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;