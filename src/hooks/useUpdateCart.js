import { useState } from 'react';
import { apiClient } from '../services/api-client';

function useUpdateCart(token) {
const [updateReponse, setUpdateResponse] = useState({});

   //Update item quantity in cart
   const handleCartUpdateQuantity = async (id, quantity) => {
    if (!token) return;
    const data = await apiClient.patch(`/user/cart/item_quantity`, {
      token: token,
      item: {
        id: id,
        quantity: quantity,
      }
    });

    const res = await data.data;
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setUpdateResponse(res);
  }

  //Add items to cart
  const handleCartAddItems = async ({ _id, name, price, background_image, slug }) => {
    if (!token) return;
    const data = await apiClient.patch(`/user/cart/add`, {
      token: token,
      item: {
        id: _id,
        quantity: 1,
        name: name,
        slug: slug,
        price: price,
        image: background_image
      }
    });
    const res = await data.data;
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setUpdateResponse(res);
  }

  //Delete items from cart
  const handleCartDeleteItem = async (itemId) => {
    if (!token) return;
    const data = await apiClient.patch(`/user/cart/remove`, {
      token: token,
      item: {
        id: itemId,
      }
    });

    const res = await data.data;
    if (!res.success) { 
      setError(res.error);
      return;
    };
    
    setUpdateResponse(res);
  }

  return { handleCartUpdateQuantity, handleCartAddItems, handleCartDeleteItem, updateReponse }
}

export default useUpdateCart