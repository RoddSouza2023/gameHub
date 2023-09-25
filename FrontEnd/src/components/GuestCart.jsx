import { Box, Container, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import useLocalCart from "../hooks/useLocalCart";

function GuestCart() {
  const { updateItemQuantityInCart, deleteItemFromCart, response } =
    useLocalCart();
  const [guestCart, setGuestCart] = useState(
    JSON.parse(localStorage.getItem("guest_cart"))
  );

  function updateGuestCart(quantity, passedProduct) {
    const index = guestCart.findIndex((item) => item.id === passedProduct.id);
    guestCart[index].quantity = quantity;
  }

  useEffect(() => {
    setGuestCart(guestCart);
  }, [response]);

  // console.log(guestCart);

  return (
    <Box padding={10}>
      <Text fontSize={"2xl"} marginY={5}>
        Cart
      </Text>
      <Box maxWidth={600}>
        {guestCart?.map((product, i) => (
          <Box
            key={product.id}
            margin={3}
            boxShadow={"0 0 5px black"}
            borderRadius={5}
            padding={2}
          >
            <HStack justify={"space-between"}>
              <Image
                align={"left"}
                boxSize={"80px"}
                borderRadius={10}
                objectFit={"cover"}
                src={product.image}
                _hover={{ cursor: "pointer" }}
                onClick={() => navigate(`/games/${product.slug}`)}
              />
              <Box textAlign={"left"}>
                <Text>{product.name}</Text>
                <Text fontSize={10}>
                  Price: $
                  {parseInt(product.price) * parseInt(guestCart[i]?.quantity)}
                  .00
                </Text>
              </Box>
              <HStack>
                <HStack marginRight={5}>
                  <Icon
                    onClick={() => {
                      const quantity = Math.max(product.quantity - 1, 1);
                      updateGuestCart(quantity, product);
                      updateItemQuantityInCart(product.id, quantity);
                    }}
                    as={AiOutlineMinusCircle}
                    _hover={{ cursor: "pointer", color: "red.500" }}
                  />
                  <Text fontSize={"sm"}>{guestCart[i]?.quantity}</Text>
                  <Icon
                    onClick={() => {
                      const quantity = product.quantity + 1;
                      updateGuestCart(quantity, product);
                      updateItemQuantityInCart(product.id, quantity);
                    }}
                    as={AiOutlinePlusCircle}
                    _hover={{ cursor: "pointer", color: "green.500" }}
                  />
                </HStack>
                <Icon
                  color={"red.500"}
                  as={AiOutlineDelete}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => {
                    setGuestCart(
                      guestCart.filter((item) => item.id !== product.id)
                    );
                    deleteItemFromCart(product.id);
                  }}
                />
              </HStack>
            </HStack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default GuestCart;
