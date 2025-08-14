import { createContext, useContext, useState } from "react";
import PLANTS from "../data";

// 1. Create a variable for the context
const ShopContext = createContext();
// 2. Create a provider component
export const ShopProvider = ({ children }) => {
  // Holds plants and cart in state (useState)
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  // Implements:
  // addToCart(plant)
  // increaseQuantity(id)
  // decreaseQuantity(id) (remove if quantity becomes 0)
  /* Prepares a single value object to pass down, e.g. { plants, cart, 
       handleAddToCart, quantityIncrease, quantityDecrease }. */

  const handleAddToCart = (plant) => {
    setCart((currentCart) => {
      // set a variable to see if the item clicked is in the state
      const existingItem = currentCart.find((item) => item.id === plant.id);
      // if it already in the cart.....
      if (existingItem) {
        // map a new array from the previous state (currentCart)
        return currentCart.map((item) => {
          // and if it's the same plant we just added
          if (item.id === plant.id) {
            // return with a copy of array with updated quantity
            return { ...item, quantity: item.quantity + 1 };
          }
          /* if during mapping, if the new item is not the same, don't touch anything so it 
           just return in the new object so it continues mapping to find one that is */
          return item;
        });
      }
      // if the clicked item is not in the cart, return the currentCart(array) and add new item (object)
      // to the cart and set the quantity to 1
      return [...currentCart, { ...plant, quantity: 1 }];
    });
  };

  const quantityIncrease = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  const quantityDecrease = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const value = {
    plants,
    cart,
    quantityIncrease,
    quantityDecrease,
    handleAddToCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// 3. Export both the Context and the Provider.
export const useShop = () => {
  return useContext(ShopContext);
};
