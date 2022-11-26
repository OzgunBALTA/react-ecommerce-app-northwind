import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const defaultCart = JSON.parse(localStorage.getItem("Cart")) || [];

  const [items, setItems] = useState([...defaultCart]);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    if (product.unitsInStock > 0) {
      toast.success(`${product.productName} Sepete Eklendi!`);
      const findCartItem = items.find(
        (item) => item.productId === product.productId
      );
      if (!findCartItem) {
        return setItems((prev) => [...prev, product]);
      } else {
        return toast.success(`${product.productName} Ürün Sayısı Arttırıldı`);
      }
    } else {
      toast.warning(`${product.productName} Ürün Sayısı Yetersiz!`);
      return;
    }
  };

  const removeFromCart = (product) => {
    const filtered = items.filter(
      (item) => item.productId !== product.productId
    );
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
