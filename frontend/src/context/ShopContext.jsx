import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'MDL';
  const delivery_fee = 0;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // Default sort by 'newest'
  const navigate = useNavigate();

  // Funcția pentru a obține datele produselor, cu sortare
  const getProductsData = async (sortBy) => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        let sortedProducts = response.data.products;

        switch (sortBy) {
          case 'newest':
            sortedProducts.sort((a, b) => 
              new Date(b.createdAt || '1970-01-01') - new Date(a.createdAt || '1970-01-01')
            );
            break;
          case 'popular':
            sortedProducts.sort((a, b) => (b.rating || b.popularity || 0) - (a.rating || a.popularity || 0));
            break;
          case 'low-high':
            sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
            break;
          case 'high-low':
            sortedProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
            break;
          default:
            break;
        }

        setProducts(sortedProducts);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData(sortBy); // Reîncarcă produsele când schimbăm tipul de sortare
  }, [sortBy]);

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
    if (token) {
      getUserCart(token);
    }
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    setCartItems,
    navigate,
    backendUrl,
    setToken,
    token,
    setSortBy, // Adăugat pentru a putea schimba tipul de sortare
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
