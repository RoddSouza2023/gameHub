import { useState } from 'react'

function useLocalCart() {
  const [response, setResponse] = useState({success: false});

  //Remove item from local cart
  const deleteItemFromCart = (id) => {
    const guestCart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
    const updatedCart = guestCart.filter((storedItem) => storedItem.id !== id);
  
    localStorage.setItem("guest_cart", JSON.stringify(updatedCart));
    setResponse({
      success: true,
      message: "Item deleted",
      newCart: JSON.parse(localStorage.getItem("guest_cart"))
    })
  };
  
  //Update item quantity in cart
  const updateItemQuantityInCart = (id, quantity) => {
    const guestCart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
    const index = guestCart.findIndex((storedItem) => id === storedItem.id);
    guestCart[index].quantity = quantity;
  
    localStorage.setItem("guest_cart", JSON.stringify(guestCart));
    setResponse({
      success: true,
      message: "Updated quantities",
      newCart: JSON.parse(localStorage.getItem("guest_cart"))
    })
  };
  
  //Add items to local cart
  const addItemToCart = (item) => {
    const guestCart = JSON.parse(localStorage.getItem("guest_cart") || "[]");
  
    const itemInCart = guestCart.find(
      (storedItems) => item._id === storedItems.id
    );
  
    if (itemInCart) {
      updateItemQuantityInCart(itemInCart.id, itemInCart.quantity + 1);
      return;
    }
  
    guestCart.push({
      id: item._id,
      quantity: 1,
      name: item.name,
      slug: item.slug,
      price: item.price,
      image: item.background_image,
    });
  
    localStorage.setItem("guest_cart", JSON.stringify(guestCart));
    setResponse({
      success: true,
      message: "Item added",
      newCart: JSON.parse(localStorage.getItem("guest_cart"))
    })
  };
  return { response, addItemToCart, updateItemQuantityInCart, deleteItemFromCart }
}

export default useLocalCart