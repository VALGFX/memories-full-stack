import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    // Funcție de toggling pentru categorii
    const toggleCategory = e => {
        setCategory(prev =>
            prev.includes(e.target.value) ? prev.filter(item => item !== e.target.value) : [...prev, e.target.value]
        );
    };

    // Funcție de toggling pentru subcategorii
    const toggleSubCategory = e => {
        setSubCategory(prev =>
            prev.includes(e.target.value) ? prev.filter(item => item !== e.target.value) : [...prev, e.target.value]
        );
    };

    // Funcție pentru sortare
    const sortProducts = (products, sortType) => {
        let sortedProducts = [...products];

        switch (sortType) {
            case 'low-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'relevant': // Caz implicit pentru relevanță
            default:
                return products;
        }

        return sortedProducts;
    };

    // Aplică filtrarea produselor
    const applyFilter = () => {
        let productsCopy = [...products];

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        // Aplicăm sortarea după filtrare
        const sortedProducts = sortProducts(productsCopy, sortType);
        setFilterProducts(sortedProducts);
    };

    // Reactualizăm lista de produse filtrate la modificarea filtrelor
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);

    // Aplicăm sortarea la schimbarea tipului de sortare
    useEffect(() => {
        setFilterProducts(prevProducts => sortProducts(prevProducts, sortType));
    }, [sortType]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filtre */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTRE
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
                </p>

                {/* Filtrare după categorie */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORII</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['Man', 'Women', 'Unisex'].map(cat => (
                            <p key={cat} className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={cat} onChange={toggleCategory} /> {cat}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Filtrare după subcategorie */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TIPUL</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {['winter', 'spring', 'summer', 'autumn'].map(sub => (
                            <p key={sub} className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={sub} onChange={toggleSubCategory} /> {sub}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lista de produse */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'TOATĂ'} text2={'COLECȚIA'} />
                    {/* Sortare */}
                    <select onChange={e => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">📌 ┃ Sortați după ...</option>
                        <option value="relevant">🆕 ┃ Cele mai noi</option>
                        <option value="low-high">📈 ┃ Preț: Crescător</option>
                        <option value="high-low">📉 ┃ Preț: Descrescător</option>
                        <option value="relevant">⭐ ┃ Cele mai apreciate</option>
                    </select>
                </div>

                {/* Afișare produse */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
