import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from './ProductCard'; // Un design mai avansat pentru card
import Title from './Title';

const NewCollection = () => {
    const { products } = useContext(ShopContext);
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        const newProducts = products.filter(item => item.newArrival);
        setNewCollection(newProducts.slice(0, 6)); // Afișăm doar primele 6
    }, [products]);

    return (
        <section className="new-collection my-12">
            <div className="text-center">
                <Title text1={'NOUA'} text2={'COLECȚIE'} />
                <p className="w-3/4 m-auto text-sm md:text-base text-gray-600">
                    Descoperă cele mai recente produse din colecția noastră, perfecte pentru a completa orice stil și ocazie.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
                {newCollection.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        description={item.description} // Adăugăm un scurt text
                    />
                ))}
            </div>
        </section>
    );
};

export default NewCollection;
