import React from 'react';

const ProductCard = ({ id, name, image, price, description }) => {
    return (
        <div className="product-card bg-gradient-to-b from-white to-gray-100 shadow-xl rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="product-image relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black px-5 py-2 rounded-full text-sm shadow-md hover:bg-gray-100 transition-colors duration-300">
                        Vezi Detalii
                    </button>
                </div>
            </div>
            <div className="p-6">
                {/* Titlul este acum limitat la 2 rânduri */}
                <h3 className="text-xl font-serif text-gray-900 line-clamp-2">
                    {name}
                </h3>
                <p className="text-sm text-gray-600 mt-3 italic line-clamp-2">
                    {description || "O creație subtilă și încântătoare, potrivită pentru orice ocazie."}
                </p>
                <div className="mt-6 flex justify-between items-center">
                    <span className="text-xl font-bold text-rose-600">
                        {price.toFixed(2)} RON
                    </span>
                    <button className="bg-rose-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-rose-600 transition-colors duration-300">
                        Cumpără
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
