import { useState } from "react";

function useCart(token) {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);

  //Get items from cart
  const handleCartGetItems = async () => {

    const data = await fetch(`${import.meta.env.VITE_API_URL}/user/cart/getItems`, {
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await data.json();
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }

  //Update item quantity in cart
  const handleCartUpdateQuantity = async (id, quantity) => {

    if (!token) { 
      const item = localStorage.guest_cart.find((item) => item.id === _id);
      item.quantity = quantity;
      return;
    };

    const data = await fetch(`${import.meta.env.VITE_API_URL}/user/cart/item_quantity`, {
      method: "PATCH",
      body: JSON.stringify({
        token: token,
        item: {
          id: id,
          quantity: quantity,
        }
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await data.json();
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }

  //Add items to cart
  const handleCartAddItems = async ({ _id, name, price, background_image, slug }) => {

    if (!token) {
      const presentGuestCart = localStorage.getItem("guest_cart");
      const updatedCart = [ ...presentGuestCart, {
        id: _id,
        quantity: 1,
        name: name,
        slug: slug,
        price: price,
        image: background_image
      }]
      localStorage.setItem("guest_cart", updatedCart);
      return;
    }

    const data = await fetch(`${import.meta.env.VITE_API_URL}/user/cart`, {
      method: "PATCH",
      body: JSON.stringify({
        token: token,
        item: {
          id: _id,
          quantity: 1,
          name: name,
          slug: slug,
          price: price,
          image: background_image
        }
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await data.json();
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }

  //Delete items from cart
  const handleCartDeleteItem = async (itemId) => {

    if (!token) { 
      const newCart = localStorage.guest_cart.filter((item) => item.id !== _id);
      localStorage.guest_cart = newCart;
      return;
    };

    const data = await fetch(`${import.meta.env.VITE_API_URL}/user/cart`, {
      method: "DELETE",
      body: JSON.stringify({
        token: token,
        item: {
          id: itemId,
        }
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await data.json();
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setResponse(res);
  }
  return { handleCartGetItems, handleCartDeleteItem, handleCartAddItems, handleCartUpdateQuantity, response, error }
}

export default useCart