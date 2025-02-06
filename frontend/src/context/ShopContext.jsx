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
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [sortBy, setSortBy] = useState('newest'); 
  const navigate = useNavigate();

  // ✅ Funcția `addToCart`
  const addToCart = (productId, quantity = 1) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      newCart[productId] = (newCart[productId] || 0) + quantity;
      return newCart;
    });

    toast.success("Produs adăugat în coș!");
  };

  // ✅ Funcția pentru obținerea și sortarea produselor
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        let sortedProducts = response.data.products || [];

        sortedProducts = sortedProducts.sort((a, b) => {
          switch (sortBy) {
            case 'newest':
              return new Date(b.createdAt || '1970-01-01') - new Date(a.createdAt || '1970-01-01');
            case 'popular':
              return (b.rating || b.popularity || 0) - (a.rating || a.popularity || 0);
            case 'low-high':
              return (a.price || 0) - (b.price || 0);
            case 'high-low':
              return (b.price || 0) - (a.price || 0);
            default:
              return 0;
          }
        });

        setProducts(sortedProducts);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Eroare la obținerea produselor:", error);
      toast.error("Eroare la obținerea produselor!");
    }
  };

  // 🔄 Reîncărcăm produsele când `sortBy` se schimbă
  useEffect(() => {
    getProductsData();
  }, [sortBy]);

  // 🔄 Reîncărcăm coșul când avem un token
  useEffect(() => {
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
    setSortBy,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
