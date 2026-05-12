import { createContext, useContext } from "react";

const CartContext = createContext();
import { initialProducts } from "../data/product";

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;

  const addToCart = (product) => {
    
  }

  return (
    <CartContext.Provider value={{ products }}>
        {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
