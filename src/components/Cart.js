import React from 'react';

const Cart = ({ cart, onRemove }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Your Cart ({cart.length})</h2>
            <ul>
                {cart.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                    <div>
                    <h3>{item.name}</h3>
                    <p className="text-sm text-gray-500">
                        {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                    </div>
                    <button onClick={() => onRemove(index)} className="text-red-500">Remove</button>
                </li>
                ))}
            </ul>
            <div className="border-t mt-4 pt-2">
                <p className="font-semibold">Order Total: ${total.toFixed(2)}</p>
                <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                    Confirm Order
                </button>
            </div>
        </div>
    );
};

export default Cart;
