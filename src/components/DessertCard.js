import React from 'react';

const DessertCard = ({ dessert, onAdd }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={dessert.image} alt={dessert.name} className="h-32 w-full object-cover" />
        <div className="p-4">
            <h3 className="text-lg font-semibold">{dessert.name}</h3>
            <p className="text-Red font-bold text-xl">${dessert.price.toFixed(2)}</p>
            <button
                onClick={() => onAdd(dessert)}
                className="mt-2 bg-yellow-500 text-Red py-1 px-2 rounded hover:bg-yellow-600"
                >
                Add to Cart
            </button>
        </div>
        </div>
    );
};

export default DessertCard;
