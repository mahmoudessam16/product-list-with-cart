import React, { useState } from 'react';
import DessertCard from './components/DessertCard';
import Cart from './components/Cart';
import desserts from './data';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    const existing = cart.find(item => item.name === dessert.name);
    if (existing) {
      setCart(cart.map(item =>
        item.name === dessert.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...dessert, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="min-h-screen bg-Rose100 p-4 font-redhat">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        <div className='col-span-3'>
          <h1 className='text-Rose900 font-bold text-4xl mb-10'>Desserts</h1>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {desserts.map((dessert, index) => (
              <DessertCard key={index} dessert={dessert} onAdd={addToCart} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <Cart cart={cart} onRemove={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default App;
