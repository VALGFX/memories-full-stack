import React from 'react';

const ProductCard = ({ id, name, image, price, description }) => {
    return (
        <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="product-image relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {description || "Descriere indisponibilă."}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-green-500">
                        {price.toFixed(2)} RON
                    </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Cumpără
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
