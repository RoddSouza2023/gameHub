import React, { useState } from 'react'

function useUpdateCart(token) {
const [updateReponse, setResponse] = useState({});

   //Update item quantity in cart
   const handleCartUpdateQuantity = async (id, quantity) => {
    if (!token) return;
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
    if (!token) return;
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
    if (!token) return;
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

  return { handleCartUpdateQuantity, handleCartAddItems, handleCartDeleteItem, updateReponse }
}

export default useUpdateCart